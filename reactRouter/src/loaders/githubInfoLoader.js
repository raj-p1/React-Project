export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/raj-p1");
  return res.json();
};
