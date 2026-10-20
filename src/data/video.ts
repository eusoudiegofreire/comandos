/** Exemplo real: imagem + prompt → vídeo de 8s feito no Google Flow (Gemini Omni Flash). */
export const videoExemplo = {
  titulo: "Até o futuro pede Só Pizzas",
  ferramenta: "Google Flow · Gemini Omni Flash",
  duracao: "8 segundos",
  formato: "Vertical 9:16",
  imagem: "/exemplos/carro-futuro.webp",
  video: "/exemplos/carro-futuro.mp4",
  videoWebm: "/exemplos/carro-futuro.webm",
  poster: "/exemplos/carro-futuro-poster.webp",
  prompt: `Create an 8-second photorealistic cinematic video using the provided image as the visual reference. Preserve the delivery man's appearance, red Só Pizzas uniform, silver futuristic Tesla-style car, branded pizza boxes, apartment balcony and coastal city at sunset.

ACTION SEQUENCE:
0–3 seconds: A silver futuristic Tesla-style flying car approaches the apartment balcony smoothly through the air. The delivery man is seated inside and the doors are initially closed. White downward thruster jets keep the vehicle airborne. The camera is positioned on the balcony, showing the approaching car and the sunset city below.

3–5 seconds: The car slows down and hovers steadily beside the balcony at the customer's height. The door beside the delivery man opens UPWARD in one smooth, mechanically coherent motion, matching the raised door in the reference image. The delivery man smiles and leans toward the balcony.

5–8 seconds: The delivery man extends the two stacked Só Pizzas pizza boxes toward the customer. A customer's hands enter from the balcony and receive both boxes in one clear, continuous handoff. The delivery man releases the boxes only after the customer securely holds them. End with the pizza boxes safely in the customer's hands and the smiling delivery man beside the open upward door.

CAMERA AND STYLE:
One continuous shot, vertical 9:16 composition. Start slightly wider to show the arrival, then gently move closer during the delivery. Warm golden sunset, realistic reflections on the silver bodywork, natural human movements and premium food commercial quality. The car remains stable in mid-air throughout the delivery.

PRESERVATION:
Keep the same face, uniform, car design and pizza box branding as the reference. Preserve the upper-left headline exactly as shown: “ATÉ O FUTURO PEDE SÓ PIZZAS.” Keep the text stable and readable throughout the video.

CONSTRAINTS:
The reference depicts the final delivery moment; animate the arrival that leads into this composition. No extra people, no duplicate boxes, no floating pizzas, no deformed hands or faces. The door must open upward, never sideways. Keep thruster jets directed downward and away from the customer. No dialogue, no added captions. Audio: subtle futuristic engine hum, door mechanism and soft city ambience.`,
  // Como o prompt é montado — pra pessoa adaptar ao produto dela
  estrutura: [
    { bloco: "Abertura", texto: "Duração, estilo e “use a imagem como referência”. Lista o que precisa ser preservado." },
    { bloco: "Action sequence", texto: "A ação dividida por segundos (0–3, 3–5, 5–8). É o que deixa o movimento coerente." },
    { bloco: "Camera and style", texto: "Um plano só, vertical 9:16, luz e qualidade de comercial." },
    { bloco: "Preservation", texto: "Rosto, uniforme, produto, marca e o texto da arte não podem mudar." },
    { bloco: "Constraints", texto: "O que a IA NÃO pode fazer: mão deformada, caixa duplicada, porta abrindo errado." },
  ],
  passos: [
    { t: "Prepare a imagem", s: "Use a arte final do anúncio (produto, pessoa, marca e texto já no lugar). Ela é o “quadro de referência” do vídeo: quanto melhor a imagem, melhor o resultado." },
    { t: "Abra o Google Flow", s: "Entre em labs.google/flow com a sua conta Google e crie um projeto novo." },
    { t: "Envie a imagem", s: "No campo de criação, escolha gerar vídeo a partir de imagem e anexe a foto como referência (quadro inicial)." },
    { t: "Escolha o Omni Flash e o formato", s: "Nas configurações, selecione o modelo Gemini Omni Flash e o formato vertical 9:16 (Reels, Stories, Shorts)." },
    { t: "Cole o prompt e gere", s: "Copie o prompt acima, troque produto, pessoa e cenário pelos seus e gere. Ele cria mais de uma versão: compare e escolha a melhor." },
    { t: "Baixe e ajuste", s: "Baixe o vídeo. Se algo saiu errado (mão, porta, texto), não reescreva tudo: reforce só aquele ponto em CONSTRAINTS e gere de novo." },
  ],
};
