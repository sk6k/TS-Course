type Admin = {
	name: string;
	privileges: string[];
};

type User = {
	name: string;
	startDate: Date;
};

type AdminUser = Admin & User;

const user: AdminUser = {
	name: 'rfgr',
	privileges: ['kkj', 'kkj'],
	startDate: new Date(),
};

console.log(user);

//////////////////////////////////////////

interface iAdmin {
	name: string;
	privileges: string[];
}

interface iUser {
	name: string;
	startDate: Date;
}

// type AdminUser_ = iAdmin & iUser;

interface iAdminUser extends iAdmin, iUser {}

const iuser: iAdminUser = {
	name: 'rfgggggggggggggr',
	privileges: ['kggggggggkj', 'kgggggggggkj'],
	startDate: new Date(),
};

console.log(iuser);
