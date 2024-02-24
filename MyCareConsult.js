// Define the array of diseases with detailed information
const diseases = [
    {
        name: "Common Cold",
        criticalness: "1] The common cold typically has a low level of criticalness. However, if symptoms persist or worsen, consult a healthcare professional.",
        homeremedies: "2] Home remedies for the common cold include drinking plenty of fluids, getting adequate rest, and using over-the-counter cold medications as needed.",
        activity: "3] Engaging in light physical activities such as gentle stretching or walking can help alleviate symptoms of the common cold.",
        precautions: "4] To reduce the spread of the common cold, practice good hygiene by washing hands frequently, covering your mouth and nose when coughing or sneezing, and avoiding close contact with sick individuals.",
        medication: "5] Over-the-counter cold medications such as decongestants, antihistamines, and pain relievers can help alleviate symptoms. However, it is advisable to seek physician help near you for proper diagnosis and treatment.",
        rechecktime: "6] If symptoms persist for more than a week or worsen, or if you develop severe symptoms such as difficulty breathing or persistent high fever, schedule a consultation with a healthcare provider."
    },
    {
        name: "Influenza (Flu)",
        criticalness: "1] Influenza can vary in severity, with the level of criticalness determined by factors such as age, underlying health conditions, and the presence of severe symptoms such as difficulty breathing. Seek medical attention promptly if you experience severe symptoms or have concerns about your health.",
        homeremedies: "2] Home remedies for influenza include resting, staying hydrated, and using over-the-counter medications to alleviate symptoms such as fever and body aches.",
        activity: "3] Light physical activities such as gentle yoga or tai chi can help improve circulation and promote recovery from influenza.",
        precautions: "4] To reduce the risk of spreading influenza, practice good respiratory hygiene, avoid close contact with sick individuals, and consider getting an annual flu vaccine.",
        medication: "5] While there are medications and treatments available for influenza, such as antiviral drugs, their use should be determined by a healthcare professional. Seek physician help near you for guidance on appropriate treatment options.",
        rechecktime: "6] Follow up with a healthcare provider for a follow-up consultation if symptoms persist or worsen, or if you have underlying health conditions that may increase the risk of complications from influenza."
    },
    {
        name: "COVID-19",
        criticalness: "1] COVID-19 can vary in severity from mild to critical, with the level of criticalness determined by factors such as age, underlying health conditions, and the presence of severe symptoms such as difficulty breathing. Seek medical attention immediately if you experience severe symptoms or have concerns about your health.",
        homeremedies: "2] Home remedies for COVID-19 include resting, staying hydrated, and using over-the-counter medications to alleviate symptoms such as fever and cough. However, it is essential to follow public health guidelines and seek medical advice if you suspect you have been exposed to COVID-19.",
        activity: "3] Engage in gentle physical activities such as deep breathing exercises or mild stretching to promote lung health and overall well-being during recovery from COVID-19.",
        precautions: "4] To reduce the spread of COVID-19, practice good hand hygiene, wear masks in public settings, maintain physical distancing, and adhere to local health guidelines and restrictions.",
        medication: "5] While there are medications and treatments available for COVID-19, such as antiviral drugs and monoclonal antibodies, their use should be determined by a healthcare professional. Seek physician help near you for guidance on appropriate treatment options.",
        rechecktime: "6] Follow up with a healthcare provider for ongoing monitoring and guidance, especially if you have underlying health conditions or experience lingering symptoms after recovering from COVID-19."
    },
    {
        name: "Asthma",
        criticalness: "1] Asthma can range from mild to severe, with the level of criticalness depending on the severity and frequency of symptoms such as wheezing, coughing, and shortness of breath. It is important to seek medical attention promptly if symptoms worsen or if you have difficulty breathing.",
        homeremedies: "2] Home remedies for asthma include avoiding triggers such as smoke, dust, and pollen, using air purifiers indoors, and practicing breathing exercises to improve lung function.",
        activity: "3] Engaging in activities such as yoga, swimming, and walking can help improve respiratory health and reduce the frequency and severity of asthma symptoms.",
        precautions: "4] To manage asthma effectively, it is important to take prescribed medications as directed, maintain a clean and allergen-free environment, and have an asthma action plan in place.",
        medication: "5] Asthma medications such as bronchodilators and corticosteroids are commonly used to control symptoms. However, it is crucial to seek physician help near you for personalized treatment and management.",
        rechecktime: "6] Schedule regular follow-up appointments with a healthcare provider to monitor asthma control, adjust treatment as needed, and discuss any concerns or changes in symptoms."
    },
    {
        name: "Diabetes",
        criticalness: "1] Diabetes requires ongoing management to prevent complications, with the level of criticalness determined by factors such as blood sugar levels, medication adherence, and lifestyle factors. Seek medical advice promptly if you experience severe symptoms such as high blood sugar or ketoacidosis.",
        homeremedies: "2] Home remedies for diabetes include maintaining a healthy diet, exercising regularly, monitoring blood sugar levels, and taking prescribed medications as directed.",
        activity: "3] Engaging in physical activities such as walking, cycling, and strength training can help improve insulin sensitivity, blood sugar control, and overall health in individuals with diabetes.",
        precautions: "4] To manage diabetes effectively, it is important to monitor blood sugar levels regularly, follow a balanced meal plan, and take medications as prescribed by a healthcare provider.",
        medication: "5] Diabetes medications such as insulin, metformin, and sulfonylureas are commonly used to control blood sugar levels. However, it is essential to seek physician help near you for personalized treatment and management.",
        rechecktime: "6] Schedule regular check-ups with a healthcare provider to monitor blood sugar control, assess for complications, and adjust treatment as needed."
    },
    {
        name: "Hypertension (High Blood Pressure)",
        criticalness: "1] Hypertension can lead to serious health complications if left untreated, with the level of criticalness determined by factors such as blood pressure readings, lifestyle habits, and the presence of underlying health conditions. Seek medical attention promptly if you experience severe symptoms such as chest pain, severe headaches, or vision changes.",
        homeremedies: "2] Home remedies for hypertension include following a heart-healthy diet, reducing sodium intake, engaging in regular physical activity, and managing stress through relaxation techniques.",
        activity: "3] Engaging in activities such as brisk walking, cycling, and swimming can help lower blood pressure, improve cardiovascular health, and reduce the risk of hypertension-related complications.",
        precautions: "4] To manage hypertension effectively, it is important to monitor blood pressure regularly, take prescribed medications as directed, and make lifestyle modifications to reduce risk factors such as obesity and smoking.",
        medication: "5] Antihypertensive medications such as diuretics, beta-blockers, and ACE inhibitors are commonly used to control blood pressure. However, it is crucial to seek physician help near you for personalized treatment and management.",
        rechecktime: "6] Schedule regular follow-up appointments with a healthcare provider to monitor blood pressure control, assess for complications, and adjust treatment as needed."
    },
    {
        name: "Example",
        criticalness: "1] Level of Seriousness: 1 2 3 4 5 ",
        homeremedies: " 2] Home-remedies.",
        activity: "3] Physical  exercise of yogasanas.",
        precautions: "4]  Precautions.",
        medication: "5] Prescription.",
        rechecktime: "6] Next visit/checkup schedule.",
    },
];

// Get references to HTML elements
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const diseaseInfo = document.getElementById('diseaseInfo');
const diseaseName = document.getElementById('diseaseName');
const criticalness = document.getElementById('Criticalness');
const homeremedies = document.getElementById('homeremedies');
const activity = document.getElementById('activity');
const precautions = document.getElementById('precautions');
const medication = document.getElementById('medication');
const rechecktime = document.getElementById('rechecktime');

// Function to display all diseases
function displayAllDiseases() {
    diseases.forEach(disease => {
        const li = document.createElement('li');
        li.textContent = disease.name;
        li.addEventListener('click', () => {
            displayDiseaseInfo(disease);
        });
        searchResults.appendChild(li);
    });
}

// Function to display disease information
function displayDiseaseInfo(disease) {
    diseaseName.textContent = disease.name;
    criticalness.textContent = disease.criticalness;
    homeremedies.textContent = disease.homeremedies;
    activity.textContent = disease.activity;
    precautions.textContent = disease.precautions;
    medication.textContent = disease.medication;
    rechecktime.textContent = disease.rechecktime;
    diseaseInfo.style.display = 'block';
}

// Call the function to display all diseases when the page loads
window.onload = displayAllDiseases;

// Event listener for input change (search functionality)
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredResults = diseases.filter(disease => disease.name.toLowerCase().includes(searchText));
    displaySearchResults(filteredResults);
});

// Function to display search results
function displaySearchResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.name;
        li.addEventListener('click', () => {
            displayDiseaseInfo(result);
        });
        searchResults.appendChild(li);
    });
}
