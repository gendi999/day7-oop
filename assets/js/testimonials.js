class Testimonial {
        constructor(quote,image){
        this._quote = quote
        this._image = image
    }
    //abstraction
    
    get quote(){
        return this._quote
    }
    get image(){
        return this._image
    }

    get html() {
        return `<div class="testimonial">
            <img src= "${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">- ${this.author}</p>
            </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    constructor(author, quote, image) {
        super(quote, image)
        this._author = author
    }
    get author() {
        return this._author
    }
}

class CompanyTestimonial extends Testimonial {
    constructor(company, quote, image) {
        super(quote, image)
        this._company = company
    }
    get author(){
        return this._company + "_Clan"
    }
}

const testimonial1 = new AuthorTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")

const testimonial2 = new AuthorTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")

const testimonial3 = new CompanyTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")

let testimonialData = [testimonial1, testimonial2, testimonial3]
let testimonialHTML = "";

for(let i = 0; i < testimonialData.length; i++) {
     testimonialHTML += testimonialData[i].html
}

document.getElementById("testimonials").innerHTML = testimonialHTML

    // class Testimonial {
    //     constructor(image){
    //         this._image = image 
    //       }
    //     //abstraction
    //     get image(){
    //         return this._image
    //     }
    
    
    //     get html() {
    //         return `<div class="testimonial">
    //             <img src= "${this.image}" class="profile-testimonial" />
    //             <p class="quote">"${this.quote}"</p>
    //             <p class="author">- ${this.author}</p>
    //             </div>`
    //     }
    // }
    
    
    
    // class AuthorTestimonial extends Testimonial {
    //     constructor(author,quote,image) {
    //         super(image)
    //         this._author = author
    //         this._quote = quote
    //     }
    //     get quote(){
    //         return this._quote
    //     }
    //     get author() {
    //         return this._author
    //     }
    // }
    
    // class CompanyTestimonial extends Testimonial {
    //     constructor(company,comenan, image) {
    //         super(image)
    //         this._company = company
    //         this._comenan = comenan
    //     }
        
    //     get quote(){
    //         return this._comenan + "_iyah dong"
    //     }
    //     get author(){
    //         return this._company + "Company"
    //     }
    // }
    
    // const testimonial1 = new AuthorTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    
    // const testimonial2 = new AuthorTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    
    // const testimonial3 = new CompanyTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    
    // let testimonialData = [testimonial1, testimonial2, testimonial3]
    // let testimonialHTML = "";
    
    // for(let i = 0; i < testimonialData.length; i++) {
    //      testimonialHTML += testimonialData[i].html
    // }
    
    // document.getElementById("testimonials").innerHTML = testimonialHTML