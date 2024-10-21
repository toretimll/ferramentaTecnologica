const termsData = [
    /* COPIAR AQUI PARA ADICIONAR
    ,
{
    name: "",
    categories: ["Y, Z"],
    description: "",
    gif: "gif/-.gif"
}*/
    {
        name: "Ácido",
        categories: ["QGe"],
        description: "Ácido é aquela substância que tem capacidade de doar íons de hidrogênio (H<sup>+</sup>) em solução aquosa.",
        gif: "gif/Acido.gif"
    },
    {
        name: "Ácido Forte",
        categories: ["Ino"],
        description: "Ácido forte é aquela substância que ioniza completamente em solução aquosa, liberando um grande número de íons de hidrogênio (H<sup>+</sup>), aumentando a acidez do meio.",
        gif: "gif/Acido_Forte.gif"
    },
    {
        name: "Ácido Fraco",
        categories: ["Ino"],
        description: "Ácido franco é aquela substância que ioniza parcialmente em solução aquosa, resultando em uma quantidade menor de íons de hidrogênio (H<sup>+</sup>), gerando uma acidez menor.",
        gif: "gif/Acido_Fraco.gif"
    },
    {
        name: "Ácido Moderado",
        categories: ["Ino"],
        description: "Ácido moderado é aquela substância que apresenta um nível de ionização entre ácido forte e ácido fraco, resultando em uma acidez intermediária em solução aquosa.",
        gif: "gif/Acido_Moderado.gif"
    },
    {
        name: "Átomos",
        categories: ["QGe"],
        description: "Átomo é uma unidade básica de matéria que consiste num núcleo central de carga elétrica positiva envolto por uma nuvem de elétrons de carga negativa.",
        gif: "gif/Atomos.gif"
    },
    {
        name: "Básico/Alcalino",
        categories: ["QGe"],
        description: "Básico é aquela substãncia que libertam íons hidroxila (OH<sup>-</sup>) em meio aquoso.",
        gif: "gif/Basico.gif"
    },
    {
        name: "Carbono",
        categories: ["Org", "Ele"],
        description: "Carbono é o elemento com número atômico 6.",
        gif: "gif/Carbono.gif"
    },
    {
        name: "Corrosão",
        categories: ["Fis", "Ino"],
        description: "Corrosão é o processo químico que ocorre em determinado material devido à sua exposição em certo meio, provocando assim, a deterioração do mesmo.",
        gif: "gif/Corrosao.gif"
    },
    {
        name: "Densidade",
        categories: ["Fis", "Ino"],
        description: "Densidade é a relação entre a massa de uma substância e seu volume, geralmente expressa em gramas por mililitro (g/mL).",
        gif: "gif/Densidade.gif"
    },
    {
        name: "Ebulição",
        categories: ["Fis", "Ino"],
        description: "Ebulição é o processo físico de transformação de um líquido em vapor quando a temperatura atinge o ponto de ebulição.",
        gif: "gif/Ebulicao.gif"
    },
    {
        name: "Elemento Químico",
        categories: ["Ino"],
        description: "Elemento químico é o conjunto formado por átomos que apresentam o mesmo número atômico.",
        gif: "gif/Elemento_quimico.gif"
    },
    {
        name: "Estequiometria",
        categories: ["Fis", "Ino"],
        description: "Estequiometria é o estudo das relações quantitativas entre os reagentes e produtos em reações químicas, permitindo calcular as quantidades envolvidas.",
        gif: "gif/Estequiometria.gif"
    },
    {
        name: "Família",
        categories: ["QGe"],
        description: "Família é o conjunto de elementos da Tabela Periódica que compartilham propriedades químicas semelhantes, geralmente localizados em uma coluna vertical.",
        gif: "gif/Familia.gif"
    },
    {
        name: "Gasoso",
        categories: ["QGe"],
        description: "Quando há maior afastamento das moléculas surge o estado gasoso (átomos dispersos).",
        gif: "gif/Gasoso.gif"
    },
    {
        name: "Hidroxila (OH<sup>-</sup>)",
        categories: ["Ino"],
        description: "A hidroxila é um ânion.",
        gif: "gif/Hidroxila.gif"
    },
    {
        name: "Íon negativo/Ânion",
        categories: ["Ino"],
        description: "Íon negativo tem uma carga negativa. Ganhou elétron.",
        gif: "gif/Ion_negativo.gif"
    },
    {
        name: "Íon positivo/Cátion",
        categories: ["Ino"],
        description: "Íon positivo tem carga positiva. Perdeu elétron.",
        gif: "gif/Ion_positivo.gif"
    },
    {
        name: "Laboratório Químico",
        categories: ["Lab"],
        description: "Laboratório Químico é o lugar onde os cientistas e pesquisadores vão fazer experiências e pesquisas.",
        gif: "gif/Laboratorio_quimico.gif"
    },
    {
        name: "Ligação Covalente",
        categories: ["Org", "QGe"],
        description: "Ligação covalente é o tipo de ligação química que ocorre quando dois átomos compartilham um ou mais pares de elétrons, formando moléculas estáveis.",
        gif: "gif/Ligacao_Covalente.gif"
    },
    {
        name: "Ligação Dupla",
        categories: ["Org"],
        description: "Ligação dupla é o tipo de ligação covalente onde dois pares de elétrons são compartilhados entre dois átomos, aumentando a força e a estabilidade da ligação.",
        gif: "gif/Ligacao_Dupla.gif"
    },
    {
        name: "Ligação Simples",
        categories: ["Org"],
        description: "Ligação simples é o tipo de ligação covalente que envolve o compartilhamento de um único par de elétrons entre dois átomos.",
        gif: "gif/Ligacao_Simples.gif"
    },
    {
        name: "Ligação Tripla",
        categories: ["Org"],
        description: "Ligação tripla é o tipo de ligação covalente em que três pares de elétrons são compartilhados entre dois átomos, resultando em uma ligação ainda mais forte que a dupla.",
        gif: "gif/Ligacao_Tripla.gif"
    },
    {
        name: "Líquido",
        categories: ["QGe"],
        description: "Quando as suas moléculas estão mais afastadas (o que dá maleabilidade).",
        gif: "gif/Liquido.gif"
    },
    {
        name: "Massa",
        categories: ["QGe"],
        description: "Massa é a medida da quantidade de matéria em um objeto, geralmente expressa em gramas (g) ou quilogramas (kg).",
        gif: "gif/Massa.gif"
    },
    {
        name: "Nêutron",
        categories: ["QGe"],
        description: "Nêutron é a partícula elementar de carga nula.",
        gif: "gif/Neutron.gif"
    },
    {
        name: "Próton",
        categories: ["QGe"],
        description: "Próton é a partícula subatómica com carga elétrica positiva que se encontra no núcleo de um átomo, juntamente com os neutrons",
        gif: "gif/Proton.gif"
    },
    {
        name: "Química Inorgânica",
        categories: ["Ino"],
        description: "Química Inorgânica é a área da Química não baseada no carbono.",
        gif: "gif/Quimica_inorganica.gif"
    },
    {
        name: "Química Orgânica",
        categories: ["Org"],
        description: "Química Orgânica é a área da Química baseada no carbono.",
        gif: "gif/Quimica_organica.gif"
    },
    {
        name: "Sólido",
        categories: ["QGe"],
        description: "Quando suas moléculas estão bem juntinhas (reunidas e organizadas).",
        gif: "gif/Solido.gif"
    },
    {
        name: "Sulfato (SO<sub>4</sub><sup>2-</sup>)",
        categories: ["Ino"],
        description: "O sulfato é um ânion.",
        gif: "gif/Sulfato.gif"
    },
    {
        name: "Volume",
        categories: ["QGe"],
        description: "Volume é a medida do espaço ocupado por um objeto ou substância, frequentemente expressa em litros (L), mililitros (mL) ou centímetros cúbicos (cm<sup>3</sup>).",
        gif: "gif/Volume.gif"
    } 
];
