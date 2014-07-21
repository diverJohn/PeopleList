var EmployeeView = function(employee) {
 

 
 	this.render = function() {
    	this.el.html(EmployeeView.template(employee));
    	return this;
	};



     this.initialize = function() {
//        var that = this;
        this.el = $('<div/>');
        
//        this.el.on('click', '.add-location-btn', this.addLocation);
//		this.el.on('click', '.add-contact-btn', this.addToContacts);
//		this.el.on('click', '.change-pic-btn', this.changePicture);
    };

    this.initialize();
 
 }
 
EmployeeView.template = Handlebars.compile($("#employee-tpl").html());

