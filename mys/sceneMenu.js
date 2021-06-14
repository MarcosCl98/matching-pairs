class SceneMenu extends Phaser.Scene {

    constructor ()
    {
        super('SceneMenu');
        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;
    }

    preload ()
    {
        this.load.image('background', 'mys/assets/background.jpg');
        this.load.image('button1', 'mys/assets/button1.png');
        this.load.image('button2', 'mys/assets/button2.png');
        this.load.image('demcare', 'mys/assets/demcare.png');
    }

    create ()
    {
        this.add.image(this.x, this.y,'background');
        var logo = this.add.image(this.x, this.y+150,'demcare');
        logo.setScale(0.6,0.6);
        this.clickButton = new TextTitle(this, this.x-230, this.y-210, 'Select the number of players to start!',
             { fontFamily: 'myFont', fontSize:30, fill: '#ffff00'});
        this.add.existing(this.clickButton);
        
        this.button1 = this.add.image(this.x, this.y-80,'button1'), () => this.scene.start('Scene1Player');
        this.button1.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene1Player'));

        this.button2 = this.add.image(this.x, this.y,'button2'), () => this.scene.start('Scene2Players');
        this.button2.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene2Players'));


        var cam  = this.cameras.add(0, 0, this.x*2, this.y*2);    
        cam.setBackgroundColor('0xfffffff');

        this.lights.enable();

        this.lights.addLight(300, 300, 300, 0xff0000, 1);
        this.lights.addLight(400, 300, 300, 0x00ff00, 1);
        this.lights.addLight(600, 500, 300, 0x0000ff, 1);
        
       
    }

    
}