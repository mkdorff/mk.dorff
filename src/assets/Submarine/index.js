import InAction from './InAction.jpg'
import UnderwaterShot from './UnderwaterShot.png'
import Controls from './Controls.png'

export default {
  shortName: 'E.T. Submarine',
  longName: 'Ethernet Tethered Submarine',
  sourceCode: 'https://github.com/mkdorff/Ethernet-Tethered-Submarine',
  description: [
    {
      type: 'bigHeader',
      content: 'TLDR;'
    },
    {
      type: 'link',
      content: 'video link',
      link: 'https://www.youtube.com/watch?v=pkmODbhjE9w'
    },
    {
      type: 'bigHeader',
      content: 'Introduction'
    },
    'There are 4 main sections to this projects. The analog components, arduino interface, Raspberry Pi server, and the physical structure of the submarine. Our goal was to make a watertight submarine that could be controlled over a web server.',
    {
      type: 'bigHeader',
      content: 'Parts'
    },
    {
      type: 'list',
      content: ['4x HP2812-880KV Brushless Motors', '4x RC Turnigy TrackStar 25A 1/18th Scale Brushless Car ESC', '1x Raspberry Pi 3 Model B', '1x Arduino Uno', '1x Logitech Webcam C110', '1x LED Spotlight', '1x 5V battery', '1x 11V Rechargeable Lithium Ion Battery']
    },
    {
      type: 'bigHeader',
      content: 'Analog Components'
    },
    'Because we used brushless motors, we also needed ESCs to provide simulated 3-phase power to each motor. The ESCs can provide forward and reverse throttle to the motors when given a 5% to 10% duty cycle signal. Anything in between 5-10% corresponded to a partial forward or partial reverse. We used the Arduino to provide the needed duty cycle.',
    'To calibrate these ESC you start by having the ESC plugged into the Arduino, but not the battery that drives the motors. You know the ESC is ready to be calibrated if it is blinking orange. (A solid Orange light means that the Arduino is sitting at 90 or stop and is ready to receive signals to drive the motors.) Once the battery is connected then send 180 (or whatever you want full forward to be). You will hear some beeps then it will start flashing red. Flashing red means it is waiting for full reverse, so send 0. It will be a few times then flash red. Send 90. It will beep a couple more times. Now the ESC is calibrated. When the motor is running you can tell by the blinking on the ESC what speed it is trying to move the motor. A green blinking light means it is set to a forward spin. Red blinking means set to a reverse spin. The speed of the blink correlates to the speed of the spin.',
    'The LED spotlight needs a minimum of 7V to turn on, but can handle up to 12 Volts. Our 11 V battery supplied power to the motors (through the ESCs) and the LED spotlight.',
    {
      type: 'bigHeader',
      content: 'Arduino Interface'
    },
    'We used a servo library that sent a discrete value (ranging from 0 to 180) to the ESC’s. It listened to any serial communications from the raspberry pi as to what signals to send to which ESC. In the code we used a letter received on the serial port to correlate to a motor and its speed. For example, receiving an “A” sets the Front Left motor to forward.. Also, on boot, the Arduino would properly calibrate the ESC’s. This is done by connecting the battery and clicking reset on the Arduino at the same time.',
    'The code can be seen at the following: https://github.com/mkdorff/subserve/blob/master/arduino/calibrateAndMotorControl.ino The protocol that we followed can be see on lines 57 to 61.',
    {
      type: 'bigHeader',
      content: 'Raspberry Pi Server'
    },
    'We made a Node.js server with a thin Express app layered on top. This server serves a simple website written in ReactJS that the user will receive the camera feed through and can send signals (using Socket.IO) to control the submarine. When the Pi gets these signals it sends the appropriate data to the Arduino.',
    'To replicate and run this project, make sure to install Node.js onto your Raspberry Pi. For convenience, we also installed yarn. Next, clone the repository. Open your terminal and change into that directory. We should be able to get it running without any further configurations. Run ‘yarn install’ then ‘yarn build’ and then ‘yarn start:prod’. That will install the dependencies we need, build that project for production and serve the production version.',
    '*If you wish to see what more is happening, please check the package.json file in the current directory as well as the client and server folders. In development, the client is actually a create-react-app project and the server is another project.',
    'One thing to note is that there are two dependencies/configurations that only compile on the Pi and when it is connected to the camera and Arduino - so it won’t build/run properly on any other machine. These have to do with video encoding (from the webcam and it being mounted at /dev/video0) and trying to connect to the arduino (by default mounted at /dev/ttyACM0).',
    'We only tested connecting and running between the Pi and a Mac. By default, the peer-to-peer connection mounts the pi at ‘sub.local’. Thus we can ssh onto the Pi with the following command: ‘ssh pi@sub.local’. Once the server is running, it will say that it is accessible at either port 3000 or port 3001. This means that we can access the website on our Mac by entering the url ‘sub.local:3001’. We have no idea how this would work with a Linux or Windows machine, but we would love to learn about it if you manage to do so.',
    {
      type: 'bigHeader',
      content: 'Physical Structure'
    },
    'The physical structure was made from 6” and 3” PVC pipe. A clear plastic cap was mounted on the front to provide a window for the webcam. Wiring for the motors was threaded through ⅛“ holes, which were then waterproofed using gorilla glue. The ethernet cable was fed through a 90-degree junction piece and then waterproofed in the same manner.',
    'The rear of the submarine was closed off using a 6” rubber stopper.',
    'Buoyancy was controlled by filling the 3” PVC pipes with varying amounts of rocks, and then filling them with water.',
    {
      type: 'bigHeader',
      content: 'Future Improvements'
    },
    {
      type: 'list',
      content: ['Buoyancy control - The current design provided no way to actively control the buoyancy. This limited the submarine’s ability to ascend and descend once submerged. We suggest that a buoyancy control system be integrated to provide more range of motion for the submarine.', 'Thermal management system - By sealing two batteries and four ESCs in an airtight capsule, we basically created a miniature oven. For short use, it wasn’t a problem, but when used for more than a few minutes, the batteries and ESCs began to really heat up and had no way of cooling down. We suggest that a thermal management system also be implemented to provide some sort of heat sink for the batteries and ESCs. Otherwise the use of the submarine is limited to a few minutes at best.', 'The central piece of the submarine was so buoyant that it took about 35 pounds to weigh it down. This put a lot of strain on the motors.']
    }
  ],
  images: [
    {
      src: InAction,
      caption: 'We apprently didn’t take very many action shots. So I took this still from a video.'
    },
    {
      src: UnderwaterShot,
      caption: 'This was on my computer, recieving this video feed from the Pi in the submarine.'
    },
    {
      src: Controls,
      caption: 'Just another part of the web interface that explained hwo the controls worked.'
    }
  ]
}