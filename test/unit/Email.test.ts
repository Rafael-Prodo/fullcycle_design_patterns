import Email from "../../src/domain/entity/Email"

test("Deve criar um email válido", function() {
    const email = new Email("rafael.dev@gmail.com");
    expect(email.getValue()).toBe("rafael.dev@gmail.com");
});

test("Não deve criar um email inválido", function () {
    expect(() => new Email("rafael.dev@gmail")).toThrow(new Error("Invalid email"));
})