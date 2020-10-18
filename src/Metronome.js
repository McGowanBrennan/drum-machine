import React, { Component } from 'react';
import './Metronome.scss';
import click1 from './click1.wav';
import click2 from './click2.wav';
import kick from "./drums/drum1.wav";
import snare from "./drums/drum3.wav";
import clap from "./drums/drum8.wav";
import perc from "./drums/drum9.wav";
import hat from "./drums/drum6.wav";


class Metronome extends Component {
    constructor(props){
        super(props)
        this.state = {
            playing: false,
            count: 0,
            bpm: 240,
            beatsPerMeasure: 4,
            playOn1: ["","","","",""],
            playOn2: ["","","","",""],
            playOn3: ["","","","",""],
            playOn4: ["","","","",""],
            playOn5: ["","","","",""],
            playOn6: ["","","","",""],
            playOn7: ["","","","",""],
            playOn8: ["","","","",""],
            playOn9: ["","","","",""],
            playOn10: ["","","","",""],
            playOn11: ["","","","",""],
            playOn12: ["","","","",""],
            playOn13: ["","","","",""],
            playOn14: ["","","","",""],
            playOn15: ["","","","",""],
            playOn16: ["","","","",""],
        }
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
        this.kick = new Audio(kick);
        this.snare = new Audio(snare);
        this.perc = new Audio(perc);
        this.clap = new Audio(clap);
        this.hat = new Audio(hat);
    }

    playClick = () =>{
        const {count} = this.state;
        
        
        if(count === 0){
            let list = this.state.playOn1
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 1){
            let list = this.state.playOn2
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 2){
            let list = this.state.playOn3
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 3){
            let list = this.state.playOn4
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 4){
            let list = this.state.playOn5
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 5){
            let list = this.state.playOn6
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 6){
            let list = this.state.playOn7
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 7){
            let list = this.state.playOn8
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 8){
            let list = this.state.playOn9
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 9){
            let list = this.state.playOn10
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 10){
            let list = this.state.playOn11
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 11){
            let list = this.state.playOn12
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 12){
            let list = this.state.playOn13
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }return(null)

            })

        }
        if(count === 13){
            let list = this.state.playOn14
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 14){
            let list = this.state.playOn15
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        if(count === 15){
            let list = this.state.playOn16
            console.log(list)
            list.map((item) =>{
                if(item==="kick"){
                    this.kick.play()
                }
                if(item==="snare"){
                    this.snare.play()
                }
                if(item==="perc"){
                    this.perc.play()
                }
                if(item==="hat"){
                    this.hat.play()
                }
                if(item==="clap"){
                    this.clap.play()
                }
                return(null)
            })

        }
        console.log(count)
        

        this.setState(state => ({
            count: (state.count + 1)
          }));
          if(count===15){
            this.setState({
                count: 0
            })
        }
    }

    startStop = () =>{
        if(this.state.playing){
            clearInterval(this.timer)
            this.setState({
                playing: false
            })
        }
        else{
            this.timer = setInterval(
                this.playClick,
                (60 / this.state.bpm) * 1000
            );
            this.setState(
                {
                    count: 0,
                    playing: true
                },
                this.playClick
            )
            
        }
    }

    changeBeat = (e) =>{
        console.log(e.target.value)
        console.log(e.target.checked)
        let val = e.target.value
        if(e.target.checked){
            if(parseInt(e.target.id) === 1){
                
                let list = this.state.playOn1
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }

                this.setState(state => 
                    ({
                    playOn1: list
                  })
                  
                )
                return(null)
            }
            
            if(parseInt(e.target.id) === 2){
                let list = this.state.playOn2
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn2: list
                  })

                ) 
                return(null)
                
            }
            if(parseInt(e.target.id) === 3){
                console.log("here")
                let list = this.state.playOn3
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn3: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 4){
                console.log("here")
                let list = this.state.playOn4
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn4: list
                  })

                )
            }
            if(parseInt(e.target.id) === 5){
                console.log("here")
                let list = this.state.playOn5
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn5: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 6){
                console.log("here")
                let list = this.state.playOn6
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn6: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 7){
                console.log("here")
                let list = this.state.playOn7
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn7: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 8){
                console.log("here")
                let list = this.state.playOn8
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn8: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 9){
                console.log("here")
                let list = this.state.playOn9
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn9: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 10){
                console.log("here")
                let list = this.state.playOn10
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn10: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 11){
                console.log("here")
                let list = this.state.playOn11
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn11: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 12){
                console.log("here")
                let list = this.state.playOn12
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn12: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 13){
                console.log("here")
                let list = this.state.playOn13
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn13: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 14){
                console.log("here")
                let list = this.state.playOn14
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn14: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 15){
                console.log("here")
                let list = this.state.playOn15
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn15: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 16){
                console.log("here")
                let list = this.state.playOn16
                if(val==="kick"){
                    list[0] = "kick"
                }
                if(val==="snare"){
                    list[1] = "snare"
                }
                if(val==="clap"){
                    list[2] = "clap"
                }
                if(val==="perc"){
                    list[3] = "perc"
                }
                if(val==="hat"){
                    list[4] = "hat"
                }
                this.setState(state => 
                    ({
                    playOn16: list
                  })

                )
                return(null)
            }

        }
        if(!e.target.checked){
            if(parseInt(e.target.id) === 1){
                
                let list = this.state.playOn1
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn1: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 2){
                
                let list = this.state.playOn2
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn2: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 3){
                
                let list = this.state.playOn3
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn3: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 4){
                
                let list = this.state.playOn4
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn4: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 5){
                
                let list = this.state.playOn5
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn5: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 6){
                
                let list = this.state.playOn6
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn6: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 7){
                
                let list = this.state.playOn7
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn7: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 8){
                
                let list = this.state.playOn8
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn8: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 9){
                
                let list = this.state.playOn9
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn9: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 10){
                
                let list = this.state.playOn10
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn10: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 11){
                
                let list = this.state.playOn11
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn11: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 12){
                
                let list = this.state.playOn12
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn12: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 13){
                
                let list = this.state.playOn13
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn13: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 14){
                
                let list = this.state.playOn14
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn14: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 15){
                
                let list = this.state.playOn15
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn15: list
                  })

                )
                return(null)
            }
            if(parseInt(e.target.id) === 16){
                
                let list = this.state.playOn16
                if(val==="kick"){
                    delete list[0]
                    list[0] = ""
                }
                if(val==="snare"){
                    delete list[1]
                    list[1] = ""
                }
                if(val==="clap"){
                    delete list[2]
                    list[2] = ""
                }
                if(val==="perc"){
                    delete list[3]
                    list[3] = ""
                }
                if(val==="hat"){
                    delete list[4]
                    list[4] = ""
                }

                this.setState(state => 
                    ({
                    playOn16: list
                  })

                )
                return(null)
            }
        }
      }

    handleBpmChange = e =>{
        const bpm = e.target.value
        this.setState({
            bpm: bpm
        })
    }


  render() {
      const {bpm, playing} = this.state;
    return (
        

        <div class="container">
            <div class = "header">
            <h1>React.js Drum Machine</h1>
                    <h3>Simple responsive drum machine made using React.js and SCSS.</h3>
                    <p>***Fill in the beats you want the drum loop to play. Layer as many drums as you want to add complexity***</p>
            </div>
            <div className="bpm-slider">
                {bpm} BPM
                <input type="range" min="240" max="480" value={bpm} onChange = {this.handleBpmChange}/>
                <a href="#" class="button-3d" onClick = {this.startStop}>{playing ? 'Stop' : 'Start'}</a>
                
            </div>
        <div class="drums">
            <div class="container2">
                <div class="hat">Hi-Hat</div>
                <div class="perc">Perc</div>
                <div class="clap">Clap</div>
                <div class="snare">Snare</div>
                <div class="kick">Kick</div>
                
                <div class = "n1"></div>

                <div class="row1">
                    
                    <input class="drum1" value="kick" id="1" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum2" value="kick" id="2"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum3" value="kick" id="3"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum4" value="kick" id="4"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum5" value="kick" id="5"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum6" value="kick" id="6"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum7" value="kick" id="7"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum8" value="kick" id="8"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum9" value="kick" id="9"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum10" value="kick" id="10"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum11" value="kick" id="11"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum12" value="kick" id="12"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum13" value="kick" id="13"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum14" value="kick" id="14"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum15" value="kick" id="15"type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum16" value="kick" id="16"type="checkbox" onChange = {this.changeBeat}/>
                </div>
            
                <div class="row2">
                    <input class="drum111"type="checkbox" value="snare" id="1" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum211"type="checkbox" value="snare" id="2" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum311"type="checkbox"value="snare" id="3" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum411"type="checkbox"value="snare" id="4" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum511"type="checkbox"value="snare" id="5" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum61"type="checkbox"value="snare" id="6" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum71"type="checkbox"value="snare" id="7" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum81"type="checkbox"value="snare" id="8" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum91"type="checkbox"value="snare" id="9" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum101"type="checkbox"value="snare" id="10" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum11111"type="checkbox"value="snare" id="11" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1221"type="checkbox"value="snare" id="12" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1321"type="checkbox"value="snare" id="13" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1421"type="checkbox"value="snare" id="14" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1512"type="checkbox"value="snare" id="15" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1612"type="checkbox"value="snare" id="16" type="checkbox" onChange = {this.changeBeat}/>
                </div>
                <div class="row3">
                    <input class="drum1654"type="checkbox"value="clap" id="1" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum2425"type="checkbox"value="clap" id="2" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum3234"type="checkbox"value="clap" id="3" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum423"type="checkbox"value="clap" id="4" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum5532"type="checkbox"value="clap" id="5" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum654325"type="checkbox"value="clap" id="6" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum732"type="checkbox"value="clap" id="7" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum458"type="checkbox"value="clap" id="8" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum9234"type="checkbox"value="clap" id="9" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum103454"type="checkbox"value="clap" id="10" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1143"type="checkbox"value="clap" id="11" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum13242"type="checkbox"value="clap" id="12" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum13253"type="checkbox"value="clap" id="13" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1344"type="checkbox"value="clap" id="14" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1235"type="checkbox"value="clap" id="15" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum16432"type="checkbox"value="clap" id="16" type="checkbox" onChange = {this.changeBeat}/>
                </div>
                <div class="row4">
                    <input class="drum323441"type="checkbox"value="perc" id="1" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum25735"type="checkbox"value="perc" id="2" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum56245473"type="checkbox"value="perc" id="3" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum46547547"type="checkbox"value="perc" id="4" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum5734473"type="checkbox"value="perc" id="5" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum6537435754"type="checkbox"value="perc" id="6" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum775474"type="checkbox"value="perc" id="7" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum757457348"type="checkbox"value="perc" id="8" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum97696967"type="checkbox"value="perc" id="9" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1032523143"type="checkbox"value="perc" id="10" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum112352135"type="checkbox"value="perc" id="11" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1256354745"type="checkbox"value="perc" id="12" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum135754"type="checkbox"value="perc" id="13" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum143246456"type="checkbox"value="perc" id="14" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum15547653"type="checkbox"value="perc" id="15" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum161253346"type="checkbox"value="perc" id="16" type="checkbox" onChange = {this.changeBeat}/>
                </div>

                <div class="row5">
                    <input class="drum710"type="checkbox"value="hat" id="1" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum711"type="checkbox"value="hat" id="2" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum3712"type="checkbox"value="hat" id="3" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum41209218302913"type="checkbox"value="hat" id="4" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum52109381290"type="checkbox"value="hat" id="5" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum6231903821093"type="checkbox"value="hat" id="6" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum7213098213821-3"type="checkbox"value="hat" id="7" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum821089321903"type="checkbox"value="hat" id="8" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum92128913712"type="checkbox"value="hat" id="9" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum12918372109830"type="checkbox"value="hat" id="10" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum12981370928173121"type="checkbox"value="hat" id="11" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum12131827328912"type="checkbox"value="hat" id="12" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum131231298210"type="checkbox"value="hat" id="13" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1412937301928"type="checkbox"value="hat" id="14" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1512389123210983"type="checkbox"value="hat" id="15" type="checkbox" onChange = {this.changeBeat}/>
                    <input class="drum1612321321312"type="checkbox"value="hat" id="16" type="checkbox" onChange = {this.changeBeat}/>
                </div>
            
             
            <div class="b1">Beat 1</div>
            <div class="b2">Beat 2</div>
            <div class="b3">Beat 3</div>
            <div class="b4">Beat 4</div>
            
            
            
            </div>
            
        </div>
        

        </div>
     
    )
  }
}

export default Metronome;