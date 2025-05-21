document.addEventListener('DOMContentLoaded', function() {
    // Base de conocimientos (sistema experto)
    const knowledgeBase = {
        resfriado: {
            nombre: "Resfriado común",
            sintomas: ["congestionnasal", "secrecionnasal", "estornudos", "dolorgarganta", "tos", "tosseca"],
            minSintomas: 3,
            duracion: ["agudo"],
            severidad: "leve",
            descripcion: "El resfriado común es una infección viral leve de las vías respiratorias superiores. Generalmente desaparece por sí solo en 7-10 días.",
            recomendaciones: [
                "Descansar adecuadamente",
                "Mantenerse hidratado",
                "Usar descongestionantes si es necesario",
                "Tomar analgésicos de venta libre para aliviar los síntomas"
            ]
        },
        gripe: {
            nombre: "Gripe (Influenza)",
            sintomas: ["fiebre", "fatiga", "dolorcuerpo", "escalofrios", "tos", "dolorgarganta", "congestionnasal"],
            minSintomas: 4,
            duracion: ["agudo"],
            severidad: "moderado",
            descripcion: "La gripe es una infección viral que afecta las vías respiratorias. A diferencia del resfriado, suele presentar síntomas más intensos y de aparición más rápida.",
            recomendaciones: [
                "Descansar en cama",
                "Beber abundantes líquidos",
                "Tomar medicamentos antifebriles y analgésicos",
                "Consultar al médico si los síntomas empeoran o persisten más de una semana"
            ]
        },
        sinusitis: {
            nombre: "Sinusitis",
            sintomas: ["congestionnasal", "secrecionnasal", "dolorcuerpo", "fatiga", "tosseca"],
            minSintomas: 3,
            duracion: ["agudo", "subagudo"],
            severidad: "moderado",
            descripcion: "La sinusitis es una inflamación de los senos paranasales. Puede ser causada por infecciones virales, bacterianas o fúngicas.",
            recomendaciones: [
                "Aplicar compresas tibias en la cara",
                "Usar spray nasal salino",
                "Tomar descongestionantes según indicación médica",
                "Consultar al médico si los síntomas persisten más de 10 días"
            ]
        },
        bronquitis: {
            nombre: "Bronquitis aguda",
            sintomas: ["tos", "tosflema", "fatiga", "fiebre", "opresionpecho"],
            minSintomas: 3,
            duracion: ["agudo", "subagudo"],
            severidad: "moderado",
            descripcion: "La bronquitis es una inflamación de los bronquios, las vías que llevan aire a los pulmones. La bronquitis aguda suele ser causada por una infección viral.",
            recomendaciones: [
                "Descansar adecuadamente",
                "Mantenerse hidratado",
                "Utilizar un humidificador",
                "Consultar al médico si la tos dura más de tres semanas o si aparece fiebre alta"
            ]
        },
        bronquitis_cronica: {
            nombre: "Bronquitis crónica",
            sintomas: ["tos", "tosflema", "fatiga", "faltaaire", "sibilancias"],
            minSintomas: 3,
            duracion: ["cronico"],
            severidad: "moderado",
            descripcion: "La bronquitis crónica es una inflamación prolongada de los bronquios. Forma parte de la enfermedad pulmonar obstructiva crónica (EPOC) y suele estar asociada al tabaquismo.",
            recomendaciones: [
                "Dejar de fumar es fundamental",
                "Usar medicamentos broncodilatadores según prescripción médica",
                "Evitar la exposición a irritantes ambientales",
                "Seguir un programa de rehabilitación pulmonar"
            ]
        },
        asma: {
            nombre: "Asma",
            sintomas: ["tos", "faltaaire", "sibilancias", "opresionpecho"],
            minSintomas: 3,
            duracion: ["agudo", "subagudo", "cronico"],
            severidad: "moderado",
            descripcion: "El asma es una enfermedad crónica que afecta las vías respiratorias. Se caracteriza por episodios de dificultad respiratoria, sibilancias y tos, especialmente por la noche o temprano en la mañana.",
            recomendaciones: [
                "Identificar y evitar los desencadenantes",
                "Utilizar inhaladores de rescate para crisis agudas",
                "Seguir el tratamiento de mantenimiento prescrito",
                "Acudir a urgencias si el ataque es severo y no responde al inhalador"
            ]
        },
        neumonia: {
            nombre: "Neumonía",
            sintomas: ["fiebre", "tos", "tosflema", "faltaaire", "escalofrios", "dolorpecho"],
            minSintomas: 4,
            duracion: ["agudo", "subagudo"],
            severidad: "grave",
            descripcion: "La neumonía es una infección que inflama los sacos aéreos de uno o ambos pulmones. Puede ser causada por bacterias, virus u hongos.",
            recomendaciones: [
                "Buscar atención médica inmediata",
                "Cumplir con el tratamiento antibiótico completo si es bacteriana",
                "Descansar adecuadamente",
                "Mantenerse hidratado y vigilar los síntomas"
            ]
        },
        covid19: {
            nombre: "COVID-19",
            sintomas: ["fiebre", "tos", "tosseca", "faltaaire", "fatiga", "dolorcuerpo", "dolorpecho"],
            minSintomas: 3,
            duracion: ["agudo", "subagudo"],
            severidad: "grave",
            descripcion: "La COVID-19 es una enfermedad infecciosa causada por el coronavirus SARS-CoV-2. Presenta un amplio espectro de síntomas respiratorios y sistémicos.",
            recomendaciones: [
                "Aislarse para evitar contagiar a otros",
                "Monitorear los niveles de oxígeno con un oxímetro si es posible",
                "Buscar atención médica si presenta dificultad respiratoria severa",
                "Mantenerse hidratado y tomar analgésicos para controlar los síntomas"
            ]
        },
        tuberculosis: {
            nombre: "Tuberculosis",
            sintomas: ["tos", "tosflema", "tossangre", "fiebre", "sudoracion", "fatiga", "faltaaire"],
            minSintomas: 4,
            duracion: ["cronico"],
            severidad: "grave",
            descripcion: "La tuberculosis es una enfermedad infecciosa causada por la bacteria Mycobacterium tuberculosis. Afecta principalmente a los pulmones, pero puede afectar otras partes del cuerpo.",
            recomendaciones: [
                "Buscar atención médica inmediata",
                "Seguir estrictamente el tratamiento antibiótico específico",
                "Mantener el aislamiento respiratorio según indicación médica",
                "Completar el tratamiento completo aunque los síntomas mejoren"
            ]
        },
        epoc: {
            nombre: "Enfermedad Pulmonar Obstructiva Crónica (EPOC)",
            sintomas: ["tos", "tosflema", "faltaaire", "sibilancias", "fatiga", "opresionpecho"],
            minSintomas: 4,
            duracion: ["cronico"],
            severidad: "grave",
            descripcion: "La EPOC es una enfermedad pulmonar progresiva que dificulta la respiración. Incluye la bronquitis crónica y el enfisema, y suele estar relacionada con el tabaquismo prolongado.",
            recomendaciones: [
                "Dejar de fumar inmediatamente",
                "Utilizar medicamentos broncodilatadores según prescripción",
                "Participar en programas de rehabilitación pulmonar",
                "Vacunarse contra la gripe y neumonía"
            ]
        }
    };

    const diagnoseBtn = document.getElementById('diagnose-btn');
    const diagnosisResult = document.getElementById('diagnosis-result');
    const diagnosisContent = document.getElementById('diagnosis-content');
    const recommendationContent = document.getElementById('recommendation-content');

    diagnoseBtn.addEventListener('click', function() {
        const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
            .map(checkbox => checkbox.value);
        const selectedDuration = document.querySelector('input[name="duration"]:checked')?.value;

        if (selectedSymptoms.length === 0) {
            alert('Por favor, seleccione al menos un síntoma.');
            return;
        }

        if (!selectedDuration) {
            alert('Por favor, seleccione la duración de los síntomas.');
            return;
        }

        // Mostrar el resultado con una animación
        diagnosisResult.style.display = 'block';

        // Determinar posibles diagnósticos
        const possibleDiagnoses = diagnoseDisease(selectedSymptoms, selectedDuration);
        displayResults(possibleDiagnoses, selectedSymptoms);
    });

    function diagnoseDisease(symptoms, duration) {
        let possibleDiseases = [];
        for (const [key, disease] of Object.entries(knowledgeBase)) {
            const matchingSymptoms = symptoms.filter(s => disease.sintomas.includes(s));
            if (matchingSymptoms.length >= disease.minSintomas && disease.duracion.includes(duration)) {
                const score = matchingSymptoms.length / disease.sintomas.length;
                possibleDiseases.push({
                    id: key,
                    nombre: disease.nombre,
                    puntaje: score,
                    sintomas_coincidentes: matchingSymptoms,
                    severidad: disease.severidad,
                    descripcion: disease.descripcion,
                    recomendaciones: disease.recomendaciones
                });
            }
        }
        possibleDiseases.sort((a, b) => b.puntaje - a.puntaje);
        return possibleDiseases;
    }

    function displayResults(diseases, selectedSymptoms) {
        diagnosisContent.innerHTML = '';
        recommendationContent.innerHTML = '';

        if (diseases.length === 0) {
            diagnosisContent.innerHTML = `
                <p>No se ha encontrado un diagnóstico claro con los síntomas seleccionados. 
                Esto puede deberse a que:</p>
                <ul>
                    <li>Los síntomas no son suficientes para un diagnóstico preciso</li>
                    <li>Podría tratarse de una condición no contemplada en nuestro sistema</li>
                    <li>Los síntomas podrían corresponder a múltiples condiciones</li>
                </ul>
                <p><strong>Se recomienda consultar a un profesional médico para una evaluación completa.</strong></p>
            `;
            recommendationContent.innerHTML = `
                <ul>
                    <li>Monitoree sus síntomas y anote cualquier cambio</li>
                    <li>Descansar adecuadamente</li>
                    <li>Mantenerse hidratado</li>
                </ul>
            `;
        } else {
            const topDisease = diseases[0];
            diagnosisContent.innerHTML = `
                <p><strong>${topDisease.nombre}</strong> (Coincidencia: ${Math.round(topDisease.puntaje * 100)}%)</p>
                <p>${topDisease.descripcion}</p>
                <p><strong>Nivel de atención requerida:</strong> 
                <span class="${topDisease.severidad === 'leve' ? 'mild' : topDisease.severidad === 'moderado' ? 'moderate' : 'severe'}">
                    ${topDisease.severidad}
                </span></p>
            `;
            if (diseases.length > 1) {
                diagnosisContent.innerHTML += `<p><strong>Otros posibles diagnósticos:</strong></p><ul>`;
                for (let i = 1; i < Math.min(diseases.length, 3); i++) {
                    diagnosisContent.innerHTML += `<li>${diseases[i].nombre} (Coincidencia: ${Math.round(diseases[i].puntaje * 100)}%)</li>`;
                }
                diagnosisContent.innerHTML += `</ul>`;
            }
            recommendationContent.innerHTML = `<ul>`;
            topDisease.recomendaciones.forEach(rec => {
                recommendationContent.innerHTML += `<li>${rec}</li>`;
            });
            recommendationContent.innerHTML += `</ul>`;
            if (topDisease.severidad === 'grave') {
                recommendationContent.innerHTML += `
                    <p style="color: #721c24; margin-top: 15px;">
                        <strong>IMPORTANTE:</strong> Los síntomas sugieren una condición potencialmente grave. 
                        Se recomienda buscar atención médica inmediata.
                    </p>
                `;
            }
        }

        // Actualizar la escala de severidad
        const severity = diseases.length > 0 ? 
            (diseases[0].severidad === 'leve' ? 'mild' : 
             diseases[0].severidad === 'moderado' ? 'moderate' : 'severe') 
            : 'mild';
        updateSeverityDisplay(severity);
    }

    function updateSeverityDisplay(severity) {
        const severityItems = document.querySelectorAll('.severity-item');
        severityItems.forEach(item => {
            item.style.opacity = '0.5';
            item.style.transform = 'scale(0.95)';
        });

        const selectedSeverity = document.querySelector(`.severity-item.${severity}`);
        if (selectedSeverity) {
            selectedSeverity.style.opacity = '1';
            selectedSeverity.style.transform = 'scale(1)';
        }
    }
});