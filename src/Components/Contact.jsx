

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl text-neutral-100">Contact</h1>
      <p className="text-neutral-300 text-lg">You can send me a message on
        <a 
        href="https://discord.com/users/765389649320476702"
        target="_blank"
        className="text-blue-400 hover:underline"> Discord
        </a>
        <span> @luxxmj (fastest response) </span>
      </p>
      <p className="text-neutral-300 text-lg">Or add me on 
        <a 
        href="https://github.com/luxxmj"
        target="_blank"
        className="text-blue-400 hover:underline"> Github
        </a>
        <span> @luxxmj </span>
      </p>
      <p className="text-neutral-300 text-lg">Or send me an
        <a
          href="mailto:luxxmj@yahoo.com"
          className="text-blue-400 hover:underline"> email
        </a>
      </p>
      <p className="text-neutral-300 text-lg"> Or join the Luxx Studio
        <a
          href="https://discord.gg/HxRkdSTWhH"
          target="_blank"
          className="text-blue-400 hover:underline"> Discord Server
        </a>
      </p>
      <p className="text-neutral-300 text-lg"> Or follow me on
        <a
          href="https://www.roblox.com/users/2864595207/profile"
          target="_blank"
          className="text-blue-400 hover:underline"> Roblox
        </a>
      </p>
    </div>
  );
};

export default Contact;