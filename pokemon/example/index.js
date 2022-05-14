function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({
    data: function () {
        return {
            nameUser: "Hà Công Minh",
            className: "vuejs",
        };
    },
}).mount("#interpolation");

Vue.createApp({
    data() {
        return {
            imgURL: "./cat.png",
            linkCser: "https://cser.vn/",
        };
    },
}).mount("#bind-attribute");

Vue.createApp({
    methods: {
        resuflt() {
            const randomNum = [getRandomInt(1, 20), getRandomInt(1, 20), getRandomInt(1, 20)]
            const sumNum = randomNum.reduce((tong, diem) => tong = +diem, 0)
            if (sumNum > 10) {
                return "tài"
            } else {
                return "xỉu"
            }
        }
    }
}).mount("#methods");

Vue.createApp({
    data() {
        return {
            message: "<h2>Anh Minh thợ code !</h2>"
        }
    }
}).mount("#raw-html")

Vue.createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        handleClick(pram) {
            this.count = this.count + pram
            return this.count
        },
        handleSubmit() {
            alert("Submit sussess!")
        },
        handleEnter() {
            alert("Login sussess!")
        },
    }
}).mount("#events")

Vue.createApp({
    data() {
        return {
            message: ""
        }
    },
}).mount("#tow_way_binding")

Vue.createApp({
    data() {
        return {
            num: 0,
            fisrtName: "Hà",
            lastName: "Công Minh",
            fullName: "",
        }
    },
    wacth: {
        num(newValue, oldValue) {
            console.log(newValue)
            console.log(oldValue)
        },
        fisrtName(newValue) {
            this.fullName = newValue + " " + this.lastName
        },
        lastName(newValue) {
            this.fullName = this.fisrtName + " " + newValue
        },
    },
    computed: {
        handleScanName() {
            return this.fisrtName + " " + this.lastName
        }
    },
    methods: {
        handelIncrea() {
            return this.num += 1
        }
    },

}).mount("#computed_and_watch")