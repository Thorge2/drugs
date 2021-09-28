import { publish } from "gh-pages";

publish(
  "build",
  {
    branch: "main",
    repo: "https://github.com/Thorge2/thorge2.github.io",
    user: {
      name: "Thorge2",
      email: "thorge@flo.rip",
    },
    dotfiles: true,
  },
  () => console.log("Deploy succeeded")
);
