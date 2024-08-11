import Image, { SrcImage } from '@theme/IdealImage';

const YEAR = '2024/2025';
const exec: ExecMember[] = [
  {
    name: 'Ben Hammond',
    roles: ['President'],
    image: require('@site/static/images/home/exec/ben.jpg'),
  },
  {
    name: 'Stan Simmons',
    roles: ['Hires Manager', 'Vice President'],
    image: require('@site/static/images/home/exec/stan.jpg'),
  },
  {
    name: 'Josh Heng',
    roles: ['Treasurer'],
    image: require('@site/static/images/home/exec/josh.jpg'),
  },
  {
    name: 'Kishan Sharma',
    roles: ['Secretary'],
    image: require('@site/static/images/home/exec/kishan.jpg'),
  },
  {
    name: 'Freya Cox',
    roles: ['Training Manager'],
    image: require('@site/static/images/home/exec/freya.jpg'),
  },
  {
    name: 'Ethan Graham',
    roles: ['Equipment Manager', 'Safety Officer'],
    image: require('@site/static/images/home/exec/ethan.jpg'),
  },
  {
    name: 'Kit Calvert',
    roles: ['Socials & Publicity Secretary', 'Welfare Officer'],
    image: require('@site/static/images/home/exec/kit.jpg'),
  },
  {
    name: 'Danny Turner',
    roles: ['Socials & Publicity Secretary', 'Equal Opportunities Officer'],
    image: require('@site/static/images/home/exec/danny.jpg'),
  },
];

type ExecMember = {
  name: string;
  roles: string[];
  image: SrcImage;
};

function GroupedExecCards({ members }: { members: ExecMember[] }) {
  if (members.length <= 3) {
    return (
      <div className="flex flex-wrap gap-2 justify-center flex-grow">
        {members.map((member) => (
          <ExecCard key={member.name} member={member} />
        ))}
      </div>
    );
  } else {
    const middle = Math.floor(members.length / 2);
    return (
      <div className="flex flex-wrap gap-2 justify-center flex-grow">
        <GroupedExecCards members={members.slice(0, middle)} />
        <GroupedExecCards members={members.slice(middle)} />
      </div>
    );
  }
}

function ExecCard({ member }: { member: ExecMember }) {
  return (
    <article
      key={member.name}
      className="overflow-hidden rounded-xl flex w-40 flex-grow flex-col dark:border-white border-black border-2"
    >
      <header className="bg-black h-10 flex justify-center items-center">
        <div className="rounded-2xl w-12 h-3 mt-0.5 bg-white" />
      </header>
      <div className="flex-grow flex flex-col px-2 py-3 text-black bg-white">
        <Image
          img={member.image}
          alt={`Image of ${member.name}`}
          className="mx-auto mb-2 w-28 h-auto mb-[4px]"
        />
        <ul className="text-center text-xs">
          {member.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
      <footer className="bg-black text-white text-center uppercase font-bold px-2 py-2">
        {member.name}
      </footer>
    </article>
  );
}

export default function TheExec() {
  return (
    <div>
      <h2>The TechXec</h2>
      <p className="mb-2">
        The <a href="/wiki/tech-crew/the-exec">Tech Crew Exec</a> are a group of
        members elected to oversee the society and its operations and can be
        contacted at{' '}
        <a href="mailto:exec@warwicktechcrew.co.uk" target="_blank">
          exec@warwicktechcrew.co.uk
        </a>
        . For the year {YEAR}, the TechXec are:
      </p>
      <GroupedExecCards members={exec} />
    </div>
  );
}
