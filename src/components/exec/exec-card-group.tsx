import { ExecMember } from '@site/src/lib/exec';

function ExecCard({ member }: { member: ExecMember }) {
  return (
    <article
      key={member.name}
      className="overflow-hidden rounded-xl flex w-40 flex-grow max-w-52 flex-col dark:border-white border-black border-2"
    >
      <header className="bg-black h-10 flex justify-center items-center">
        <div className="rounded-2xl w-12 h-3 mt-0.5 bg-white" />
      </header>
      <div className="flex-grow flex flex-col px-2 py-3 text-black bg-white">
        <img
          src={`/exec/${member.image || 'blank.jpg'}`}
          alt={`Image of ${member.name}`}
          className="mx-auto mb-2 w-48 h-auto aspect-[0.8] object-cover"
        />
        <ul className="text-center text-xs">
          {member.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
      <footer className="bg-black text-white text-center uppercase font-bold px-2 py-2">{member.name}</footer>
    </article>
  );
}

export default function ExecCardGroup({ members }: { members: ExecMember[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {members.map((member) => (
        <ExecCard key={member.name} member={member} />
      ))}
    </div>
  );
}
