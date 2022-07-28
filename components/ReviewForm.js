app.component('review-form', {
    template: 
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name"/>

    <label for="review">Review</label>
    <textarea id="review" v-model="review"/>

    <label for="rating">Rating</label>
    <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <input class="button" type="submit" value="submit"/>
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit(){
            if(this.name === '' || this.review === '' || this.rating === '') return alert("form tidak boleh kosong")

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = ''
        }
    },
})
