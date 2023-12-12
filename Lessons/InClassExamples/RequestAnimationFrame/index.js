const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


class Animatable {

    update(deltaT) {

    }

    render(context) {

    }

    setAnimation(animation) {
        this.animation = animation;
    }

}

const COLORS = ["red", "yellow", "blue", "green", "purple", "black", "pink", "orange", "white"]

class Ball extends Animatable {

    constructor(x, y) {
        super();
        this.color = COLORS[Math.floor(Math.random() * 9)];
        this.x = x;
        this.y = y;
        this.v = 0;
    }

    update(deltaT) {
        const deltaV = 35 * (deltaT / 1000) ;
        this.timeAlive += deltaT;

        if (this.timeAlive > 5000) {
            this.animation.removeAnimatable(this);
        }

        this.v += deltaV;
        this.y += this.v;
        if (this.y + 50 > this.animation.height) {
            this.y = this.animation.height - 50;
            this.v = (-1 * this.v) + 5;

        }
    }
    render(context) {
        context.beginPath();
        context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
    }


}

class Animation {
    constructor(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.animatables = [];
        this.lastTimeStamp = 0;
        this.timeAlive = 0;
    }

    addAnimatable(animatable) {
        this.animatables.push(animatable);
    }

    removeAnimatable(animatable) {
        this.animatables.splice(this.animatables.indexOf(animatable));
    }

    update(timeStamp) {

        if (!this.lastTimeStamp) {
            this.lastTimeStamp = timeStamp;
        }
        
        const deltaT = timeStamp - this.lastTimeStamp;
        this.context.clearRect(0,0, this.width, this.height);
        this.animatables.forEach(animatable => animatable.update(deltaT));
        
        // Figure out where everything goes
        this.animatables.forEach(animatable => animatable.render(this.context));


        //draw everything
        this.lastTimeStamp = timeStamp;
        // start process again
        requestAnimationFrame((timeStamp) => {
            this.update(timeStamp);
        })

    }

    start() {
        requestAnimationFrame((timeStamp) => {
            this.update(timeStamp);
        });
    }
}


const animation = new Animation(ctx, 800, 800);
animation.start();

canvas.addEventListener("click", (e) =>  {
    const ball = new Ball(e.offsetX, e.offsetY);
    ball.setAnimation(animation);
    animation.addAnimatable(ball);
});