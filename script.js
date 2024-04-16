function search() {
    var userInput = document.getElementById('user-input').value;
    document.getElementById('chat-box').innerHTML += '<div class="user-message">' + userInput + '</div>';

    // Add logic to search for mentors based on the user's query
    var mentorList = findMentors(userInput);
    displayMentors(mentorList);
}

function findMentors(query) {
    // Example function to find mentors based on user query
    // Replace this with your actual mentor search logic
    if (query === 'Tech Startup') {
        return ['John Doe: Expert in tech startups with 10+ years of experience.', 'Jane Smith:Co-founder of a successful tech startup.','Priyanka Gill:Investor and mentor for tech startups.'];
    } else if (query === 'E-commerce') {
        return ['Alice Johnson:E-commerce consultant with proven track record.', 'Bob Williams:Founder of a leading e-commerce platform.','Kalyan Krishnamurthy:CEO of a major e-commerce company.'];
    } else if (query === 'Food & Beverage') {
        return ['Emily Brown:Chef and restaurateur with Michelin-starred experience.', 'Michael Davis:Food industry expert and consultant.','Sanjeev Kapoor:Celebrity chef and cookbook author.'];
    }   else if (query === 'Transport') {
            return ['Jayesh Sharma:Transportation logistics specialist.', 'Jasty Fernandes:Expert in urban transportation planning.','Minnie Kendy:Transportation entrepreneur and innovator.'];
    } else {
        return [];
    }
}

function displayMentors(mentorList) {
    var chatBox = document.getElementById('chat-box');
    if (mentorList.length > 0) {
        chatBox.innerHTML += '<div class="bot-message">Here are some mentors who can guide you:</div>';
        mentorList.forEach(function (mentor) {
            chatBox.innerHTML += '<div class="bot-message">' + mentor + '</div>';
        });
    } else {
        chatBox.innerHTML += '<div class="bot-message">Sorry, no mentors found for this business idea.</div>';
    }
}
