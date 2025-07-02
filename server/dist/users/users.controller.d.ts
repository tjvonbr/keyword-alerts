import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        id: string;
        emailVerified: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
