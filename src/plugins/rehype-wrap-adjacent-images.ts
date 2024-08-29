import { visit } from 'unist-util-visit';
import { Node, Parent } from 'unist';

interface Element extends Parent {
  type: 'element';
  tagName: string;
  properties: { [key: string]: string };
  children: Node[] | Element[];
}

type ImageNode = {
  node: Element;
  parent: Element;
  childIndex: number;
};

/**
 * Transform the first image into a div gallery containing all other images
 * @param imageNodes
 */
function makeImagesIntoGallery(imageNodes: ImageNode[]) {
  console.log('MAKING GALLERY');
  console.log(imageNodes);

  // Clear all
  // Object.assign()
  /*// Convert first image into div with other images as children
  imageNodes[0].parent.children[imageNodes[0].childIndex] = {
    type: 'element',
    tagName: 'div',
    properties: { gallery: 'true' },
    children: imageNodes.map((image) => image.node),
  };

  // Remove all other images
  imageNodes.slice(1).forEach(({ node, parent }) => {
    parent.children = parent.children.filter((child: any) => child !== node);
  });*/
  for (const node of imageNodes) {
    // node.parent.children.splice(node.childIndex, 1);
    node.node.type = 'element';
    node.node.tagName = 'div';
  }

  console.log(imageNodes);
}

export default function rehypeWrapAdjacentImagesPlugin() {
  return async (tree: Node) => {
    let currentImages: ImageNode[] = [];
    let lastNodeWasNewline = false;

    visit(tree, (node: Element | any, i: number, parent: Element) => {
      // If the node is an image, and either it's the first image in the list or it's a sibling of the previous image
      if (
        node.type === 'mdxJsxFlowElement' &&
        node.name === 'img' &&
        (currentImages.length === 0 || currentImages[0].parent === parent)
      ) {
        //if (node.parent) node.parent.children.splice(node.childIndex, 1);
        node.type = 'element';
        node.tagName = 'div';
        delete node.attributes;
        return;
        lastNodeWasNewline = false;
        // Add the image to the list
        currentImages.push({ node, childIndex: i, parent });
      } else if (
        node.type === 'text' &&
        node.value === '\n' &&
        !lastNodeWasNewline
      ) {
        lastNodeWasNewline = true;
      } else {
        lastNodeWasNewline = false;

        // Otherwise, if we have a list of images, make them into a gallery and then reset the images array
        if (currentImages.length > 1) {
          makeImagesIntoGallery(currentImages);
        }

        if (currentImages.length > 0) {
          console.log(currentImages);
          currentImages = [];
        }
      }
    });

    // Make any remaining images into a gallery
    if (currentImages.length > 1) {
      makeImagesIntoGallery(currentImages);
    }
  };
}
