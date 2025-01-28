import Signup from "../../src/application/usecase/Signup";
import Login from "../../src/application/usecase/Login";
import UserRepositoryMemory from "../../src/infra/repository/memory/UserRepositoryMemory";

test("Deve fazer o signup", async function () {
    const userRepository = new UserRepositoryMemory();
    const signup = new Signup(userRepository);
    const inputSignup = {
        name:"Rafael Prosdoskimis",
        email: "rafael.dev@gmail.com",
        password: "12345678",
        age: 34
    };
    await signup.execute(inputSignup);
    const login = new Login(userRepository);
    const inputLogin = {
        email:"rafael.dev@gmail.com",
        password: "12345678"
    }
    const output = await login.execute(inputLogin);
    expect(output.name).toBe("Rafael Prosdoskimis");
    expect(output.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbC5kZXZAZ21haWwuY29tIiwiaWF0IjoxNzM3NzIzNjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwMDB9.5jciMB-mRpZN0XYtIhUai_jWQirhL-9uSLcBsv0d6ZU");
});