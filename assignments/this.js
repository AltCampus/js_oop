
// Factory pattern
// prototypal pattern
// sudo classical
// class - syntactical sugar

// 1ST METHOD
	function CreateUser1(name, id, password, noOfProjects){
        let user={name, id, password, noOfProjects}
        user.getUsername = function(){return this.name};
        user.getPassword = function(){return this.password};
        user.getProjects = function(){return this.noOfProjects};

        user.changeUsername = function(newUsername){
            let oldUsername = this.name;
            this.name = newUsername;
            return oldUsername;
        };
        user.changePassword = function(newPassword){
            let oldPassword = this.password;
            this.password = newPassword;
            return oldPassword;
        };

		user.incrementProject = function() {
            return ++noOfProjects
        };
        user.decrementProject = function() {
            return --noOfProjects
        };
        
        return user;
    }
    
    console.log(CreateUser1("karen", 12, "sasasa", 4));
	
//2ND METHOD

	userMethods = {
        getUsername: function() {
            return this.name
        },
        getPassword: function() {
            return this.password
        },
        getProjects: function() {
            return this.noOfProjects
        },
        changeUsername: function(newUsername){
            let oldUsername = this.name;
            this.name = newUsername;
            return oldUsername;
        },
        changePassword: function(newPassword){
            let oldPassword = this.password;
            this.password = newPassword;
            return oldPassword;
        },

		incrementProject: function() {
            return ++noOfProjects
        },
        decrementProject: function() {
            return --noOfProjects
        }
    }
    
	function CreateUser2(name, id, password, noOfProjects){
		let user = Object.create(userMethods);
        user.name = name;
        user.id = id;
        user.password = password;
        user.noOfProjects = noOfProjects;
		return user;
	}
    console.log(CreateUser2("karen", 12, "sasasa", 4));

//3RD METHOD
	
	function CreateUser3(name, id, password, noOfProjects){
        this.name = name;
        this.id = id;
        this.password = password;
        this.noOfProjects = noOfProjects;
	}

	CreateUser3.prototype.getUsername = function() {
        return this.name
    };
    CreateUser3.prototype.getPassword = function() {
        return this.password
    };
    CreateUser3.prototype.getProjects = function() {
        return this.noOfProjects
    };
    CreateUser3.prototype.changeUsername = function(newUsername){
        let oldUsername = this.name;
        this.name = newUsername;
        return oldUsername;
    };
    CreateUser3.prototype.changePassword = function(newPassword){
        let oldPassword = this.password;
        this.password = newPassword;
        return oldPassword;
    };

    CreateUser3.prototype.incrementProject = function() {
        return ++noOfProjects
    };
    CreateUser3.prototype.decrementProject = function() {
        return --noOfProjects
    };

	
    let sam = new CreateUser3("sam", 123, "password", 5);
    console.log(sam.changePassword("damnitkaren"))
	
//4th METHOD Class
	class User {
		constructor(name, id, password, noOfProjects) {            
            this.name = name;
            this.id = id;
            this.password = password;
            this.noOfProjects = noOfProjects;
		}
		
        getUsername() {
            return this.name
        };
        getPassword() {
            return this.password
        };
        getProjects() {
            return this.noOfProjects
        };
        changeUsername(newUsername){
            let oldUsername = this.name;
            this.name = newUsername;
            return oldUsername;
        };
        changePassword(newPassword){
            let oldPassword = this.password;
            this.password = newPassword;
            return oldPassword;
        };
		incrementProject() {
            return ++noOfProjects
        };
        decrementProject() {
            return --noOfProjects
        };
	}
	
	let pika = new User("123", "123", "123", 123);	
	console.log(pika.changeUsername("pikapika"));
    
