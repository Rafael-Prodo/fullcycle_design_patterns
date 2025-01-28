import User from "../entity/User";
import { AbstractSpecification } from "./Specification";

export default class UserEmailSpecification extends AbstractSpecification<User> {
    
    isSatisfiedBy(user: User): boolean {
        return !String(user.email).toLowerCase().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    }
    
}