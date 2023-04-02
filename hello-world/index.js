const hello = () => {
  console.log("Hello GitHub!");
};
hello();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};
x = formattedDate(new Date());
console.log(x);
