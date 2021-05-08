import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[basicHighlight]'
}) 
export class BasicHighlight implements OnInit{
    constructor( private elemRef: ElementRef, private renderer:Renderer2){
    }
    
    ngOnInit(){
        
    }

    @HostListener('mouseenter') mouseOver(event: Event){
        this.renderer.setStyle(this.elemRef.nativeElement,'backgroundColor', 'yellow');
    }

    @HostListener('mouseleave') mouseLeft(event: Event){
        this.renderer.setStyle(this.elemRef.nativeElement,'backgroundColor', 'transparent');
    }
 }