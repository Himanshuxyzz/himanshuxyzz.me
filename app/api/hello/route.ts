export async function GET(request: Request) {
  const mockData = [
    {
      name: "Himanshu",
      age: 25,
      email: "himanshu@gmail.com",
    },
    {
      name: "John",
      age: 30,
      email: "john@gmail.com",
    },
    {
      name: "Jane",
      age: 35,
      email: "jane@gmail.com",
    },
  ];

  return Response.json(mockData);
}
