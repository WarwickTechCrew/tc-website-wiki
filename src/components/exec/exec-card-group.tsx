import { ExecMember } from '@site/src/lib/exec';

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
        <img src={`/exec/${member.image}`} alt={`Image of ${member.name}`} className="mx-auto mb-2 w-28 h-auto" />
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
        <ExecCardGroup members={members.slice(0, middle)} />
        <ExecCardGroup members={members.slice(middle)} />
      </div>
    );
  }
}
