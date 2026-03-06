// cards parent element
const issueCards = document.getElementById('issueCards');



const loadAllIssuesCard = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
    const data = await res.json();
    displayCard(data.data);

}

const displayCard = (data) => {
    issueCards.innerHTML = ""
    data.forEach(card => {
        const div = document.createElement("div");
        div.id = `border-${card.id}`
        div.className = 'card bg-base-100 max-w-96 shadow-sm border-t-4 border-green-500'
        div.innerHTML = `
         <div class="card-body">

                        <div class="flex justify-between">
                            <img src=${card.status === 'open' ? './assets/Open-Status.png' : './assets/clonse.png'} alt="">
                            <div id="card-${card.id}" class="badge font-semibold bg-[#FEECEC] text-red-500">${card.priority.toUpperCase()}</div>
                        </div>
                        <h2 class="card-title">${card.title}</h2>
                        <p class="text-[#64748B]">${card.description}</p>
                        <div id="bug-${card.id}">
                            <div class="badge bg-[#FEECEC] text-red-500"><img src="./assets/BugDroid.png" alt=""> BUG
                            </div>
                            <div class="badge bg-[#FFF8DB] text-[#D97706]"><img src="./assets/Lifebuoy.png" alt=""> HELP
                                WANTED</div>
                        </div>
                        <div class="card-actions justify-end border-t-2 border-gray-200 flex flex-col gap-1 mt-4 pt-5">
                            <p class="text-[#64748B] text-sm">${card.author}</p>
                            <p class="text-[#64748B] text-sm">${card.createdAt}</p>
                        </div>
                    </div>
        `
        issueCards.appendChild(div)

        const dynamicPriority = document.getElementById(`card-${card.id}`);
        const borderTop = document.getElementById(`border-${card.id}`);
        if (card.priority === "medium") {
            dynamicPriority.classList.remove('text-red-500', 'bg-[#FEECEC]');
            dynamicPriority.classList.add('bg-[#FFF8DB]', 'text-[#D97706]')
        }
        else if (card.priority === "low") {
            dynamicPriority.classList.remove('text-red-500', 'bg-[#FEECEC]');
            borderTop.classList.remove('border-green-500');
            borderTop.classList.add('border-[#A855F7]');
            dynamicPriority.classList.add('bg-gray-100', 'text-gray-500');
        }
        // dynamic bug fixed status
        const bugStatus = document.getElementById(`bug-${card.id}`);
        const statusBug = card.labels[0];
        if (statusBug !== "bug") {
            bugStatus.innerHTML = "";
            bugStatus.innerHTML = `
            <div class="badge  bg-green-100 text-green-600"><i class="fa-solid fa-wand-magic-sparkles"></i><span>ENHANCEMENT</span></div>
            `
        }




    });


}



// "id": 9,
// "title": "Add export to PDF feature",
// "description": "Users want to export reports and dashboards to PDF format for sharing and printing.",
// "status": "open",
// "labels": [
// "enhancement"
// ],
// "priority": "medium",
// "author": "feature_fred",
// "assignee": "",
// "createdAt": "2024-01-16T10:15:00Z",
// "updatedAt": "2024-01-16T10:15:00Z"










loadAllIssuesCard();
