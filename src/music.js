import * as Tone from 'tone'
import {useState} from 'react'
      

export default function Music(){
    const [buttonStatus, setButtonStatus] = useState(false)
   
    function example4(){
        const sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();
        
        Tone.loaded().then(() => {
            sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
        })
    }
    function example1(){
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now()
        synth.triggerAttackRelease("A3", "8n", now);
        synth.triggerAttackRelease("C4", "8n", now + 0.25);
        synth.triggerAttackRelease("D4", "2n", now+0.5);

    }
    function example2(){
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now()
        // trigger the attack immediately
        synth.triggerAttack("C4", now)
        // wait one second before triggering the release
        synth.triggerRelease(now + 1)
    }
    function example3(){
        const synthA = new Tone.FMSynth().toDestination();
        const synthB = new Tone.AMSynth().toDestination();
        //play a note every quarter-note
        const loopA = new Tone.Loop(time => {
            synthA.triggerAttackRelease("E4", "16n", time);
            synthA.triggerAttackRelease("G4", "16n", time + 0.125);
            synthA.triggerAttackRelease("E4", "16n", time+0.25);
            synthA.triggerAttackRelease("G4", "16n", time + 0.375);
            synthA.triggerAttackRelease("A4", "16n", time + 0.5);
            synthA.triggerAttackRelease("A4", "16n", time + 0.625);
            synthA.triggerAttackRelease("A4", "16n", time + 0.75);
            synthA.triggerAttackRelease("C5", "16n", time + 0.875);
            synthA.triggerAttackRelease("A4", "16n", time+ 1);
            synthA.triggerAttackRelease("C5", "16n", time + 1.125);
            synthA.triggerAttackRelease("D5", "16n", time + 1.25);
            synthA.triggerAttackRelease("D5", "16n", time + 1.375);
        }, "1n").start(0);
       
        Tone.Transport.start()
    }

    function example4(){
        const synth = new Tone.PolySynth(Tone.Synth).toDestination();
        const now = Tone.now()
        synth.triggerAttack("D4", now);
        synth.triggerAttack("F4", now + 0.5);
        synth.triggerAttack("A4", now + 1);
        synth.triggerAttack("C5", now + 1.5);
        synth.triggerAttack("E5", now + 2);
        synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
    }
// 2n => 1s
// 4n => 0.5s
// 8n => 0.25s
function jsonToMusic(json){
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now()
    Tone.Transport.bpm.value = 240
    var acumulateTime = 0
    const partitura = []
    json.map(([note, duration])=>{
        if(!note){
            acumulateTime = acumulateTime + (2/duration)
            return
        }
        synth.triggerAttackRelease(note, `${duration}n`, now + acumulateTime);
        partitura.push([note,`${duration}n`, acumulateTime] )
        acumulateTime = acumulateTime + (2/duration)
    })
    console.log(partitura)
}
const Eudaimonia = [
    ['A3', 8],
    ['C4', 8],
    ['D4', 1],
    ['E4', 8],
    ['D4', 8],
    ['C4', 8],
    ['A3', 8],
    ['A3', 1],
    ['C4', 8],
    ['D4', 8],
    ['E4', 1],
    ['G4', 8],
    ['E4', 8],
    ['G4', 8],
    ['E4', 8],
    ['D4', 1],
    ['D4', 8],
    ['E4', 8],
    ['F4', 1],
    ['F4', 8],
    ['E4', 8],
    ['C4', 1],
    ['D4', 8],
    ['E4', 8],
    ['D4', 1],
]
const Base = [
    [['A3', 'C3', 'E4'], 1],
    [['D3', 'F3', 'A4'], 1],
    [['A3', 'C3', 'E4'], 1],
    [['D3', 'F3', 'A4'], 1],
    [['A3', 'C3', 'E4'], 1],
    [['D3', 'F3', 'A4'], 1],
    [['A3', 'C3', 'E4'], 1],
    [['D3', 'F3', 'A4'], 1],
    [['A3', 'C3', 'E4'], 1],
    [['D3', 'F3', 'A4'], 1],
    [['A3', 'C3', 'E4'], 1],
    [['D3', 'F3', 'A4'], 1],
]
const Techno = [
    ['E4', 8],
    ['G4', 8],
    ['E4', 8],
    ['G4', 4],
    ['A4', 8],
    ['A4', 4],
    ['A4', 8],
    ['C5', 8],
    ['A4', 8],
    ['C5', 4],
    ['D5', 8],
    ['D5', 4],
    ['E4', 8],
    ['G4', 8],
    ['E4', 8],
    ['G4', 4],
    ['A4', 8],
    ['A4', 4],

    ['E5', 8],
    ['D5', 8],
    ['C5', 8],
    ['D5', 8],
    ['C5', 8],
    ['A4', 16],
    ['G4', 16],
    ['A4', 4],

    ['E5', 8],
    ['D5', 8],
    ['C5', 8],
    ['D5', 8],
    ['C5', 8],
    ['A4', 16],
    ['G4', 16],
    ['A4', 4],

    ['E5', 8],
    ['D5', 8],
    ['C5', 8],
    ['D5', 8],
    ['C5', 8],
    ['A4', 16],
    ['G4', 16],
    ['A4', 4],

    ['E5', 8],
    ['D5', 8],
    ['C5', 8],
    ['D5', 8],
    ['E5', 8],
    ['D5', 8],
    ['C5', 8],
    ['D5', 8],
    ['E5', 8],
    ['D5', 8],
    ['C5', 8],
    ['D5', 8],

    ['C5', 8],
    ['A4', 16],
    ['G4', 16],
    ['A4', 4],

]
    return (
        <div id="content">
            <button onClick={example1}>{'example1'}</button>
            <button onClick={example2}>{'example2'}</button>
            <button onClick={example3}>{'example3'}</button>
            <button onClick={example4}>{'example4'}</button>
            <button onClick={()=>jsonToMusic([...Techno, ...Techno, ...Techno, ...Techno])}>{'jsonToMusic'}</button>
            <button onClick={()=>jsonToMusic(Base)}>{'jsonToMusic'}</button>


        </div>
    )
}