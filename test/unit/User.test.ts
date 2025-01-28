import { rejects } from "assert";
import User from "../../src/domain/entity/User";

test("Deve criar um usuário", async function () {
    const user = await User.create("Rafael Prosdoskimis", "rafael.dev@gmail.com", "12345678", 30);
    expect(user.name.getValue()).toBe("Rafael Prosdoskimis");
    expect(user.email.getValue()).toBe("rafael.dev@gmail.com");
    expect(user.password.value).toBe("f1fa680348802c16e610e0afa109ef9fd2ea21001bf0449ea4372229cee93a13c3eb08a30068a92b82d376d195f5ed4bebfd9b51413a0ae23dbb38da9141a4b4");
    expect(user.age).toBe(30);
    
});

test("Não deve criar um usuário inválido", function () {
    expect(() => User.create("Rafael", "rafael.dev@gmail.com", "12345678", 30)).rejects.toThrow(new Error("Invalid name"));
    
});

test("Não deve criar um email inválido", function () {
    expect(() => User.create("Rafael Prosdoskimis", "rafael.dev@gmail", "12345678", 30)).rejects.toThrow(new Error("Invalid email"));
    
});

test("Não deve criar um password inválido", function () {
    expect(() => User.create("Rafael Prosdoskimis", "rafael.dev@gmail.com", "123456", 30)).rejects.toThrow(new Error("Invalid password"));
    
});

test("Não deve criar um usuário com idade inválida", function () {
    expect(() => User.create("Rafael Prosdoskimis", "rafael.dev@gmail.com", "12345678", 17)).rejects.toThrow(new Error("Invalid age"));
    
});