export async function GET(request) {
  const data = {
    hello: "world",
  };
  console.log("hello world");
  return Response.json(data);
}
