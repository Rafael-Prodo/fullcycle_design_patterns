import CheckAuth from "../../src/application/usecase/CheckAuth";

test("Deve verificar se está autenticado", async function() {
    const checkAuth = new CheckAuth();
    const input = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbC5kZXZAZ21haWwuY29tIiwiaWF0IjoxNzM3NzIzNjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwMDB9.5jciMB-mRpZN0XYtIhUai_jWQirhL-9uSLcBsv0d6ZU";
    const output = await checkAuth.execute(input);
    expect(output.email).toBe("rafael.dev@gmail.com");
});