function descobrirLampadas() {
    
    let interruptorA = false; 
    let interruptorB = false; 
    let interruptorC = false; 
    
    console.log("Passo 1: Ligue o interruptor A e deixe ligado por alguns minutos...");
    interruptorA = true;  

    console.log("Passo 2: Desligue o interruptor A e ligue o interruptor B.");
    interruptorA = false;  
    interruptorB = true;   

    console.log("Agora, vá até a sala das lâmpadas...");

    
    let lampada1 = { acesa: false, quente: true };  
    let lampada2 = { acesa: true, quente: false };  
    let lampada3 = { acesa: false, quente: false };

    console.log("Passo 3: Verifique as condições das lâmpadas...");

    
    if (lampada1.acesa) {
        console.log("A lâmpada acesa está conectada ao interruptor B.");
    } else if (lampada1.quente) {
        console.log("A lâmpada quente (mas apagada) está conectada ao interruptor A.");
    } else {
        console.log("A lâmpada fria e apagada está conectada ao interruptor C.");
    }

    if (lampada2.acesa) {
        console.log("A lâmpada acesa está conectada ao interruptor B.");
    } else if (lampada2.quente) {
        console.log("A lâmpada quente (mas apagada) está conectada ao interruptor A.");
    } else {
        console.log("A lâmpada fria e apagada está conectada ao interruptor C.");
    }

    if (lampada3.acesa) {
        console.log("A lâmpada acesa está conectada ao interruptor B.");
    } else if (lampada3.quente) {
        console.log("A lâmpada quente (mas apagada) está conectada ao interruptor A.");
    } else {
        console.log("A lâmpada fria e apagada está conectada ao interruptor C.");
    }
}

// Executando a função
descobrirLampadas();
