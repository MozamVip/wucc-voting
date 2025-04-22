const awardData = [
            {
                id: 1,
                name: "Most Handsome",
                description: "Recognizing the Most Handosme Student in the Department of Computing",
                type: "individual",
                nominees: [
                    { id: 101, name: "Etinosa Frank", votes: 501, image: "img/Frank.jpeg" },
                    { id: 102, name: "Sotonye Green", votes: 1081, image: "img/green.jpeg" },
                    { id: 104, name: "Nelson", votes: 0, image: "img/nelson.jpeg" },
                    { id: 105, name: "Uyioghosa", votes: 5, image: "img/uyi.jpeg" },
                    { id: 106, name: "OZ", votes: 17, image: "img/OZx.jpeg" },
                    { id: 107, name: "Veno", votes: 1, image: "img/veno.jpeg" }
                    
                ]
            },
            {
                id: 2,
                name: "Freshest Fresher",
                description: "Freshest Fresher in the Department of Computing",
                type: "individual",
                nominees: [
                    { id: 201, name: "OZ", votes: 55, image: "img/OZx.jpeg" },
                    { id: 202, name: "Godswill Enajewhe", votes: 0, image: "img/Godswill.jpeg" },
                    { id: 203, name: "Arthur Prest", votes: 0, image: "img/arthur.jpeg" },
                    { id: 204, name: "Classic Clown", votes: 1, image: "img/clown.jpeg" },
                    { id: 205, name: "Emmanuel Unishemi", votes: 10, image: "" }
                            
                ]
                
            },
            {
                id: 3,
                name: "Business Brand of the Year",
                description: "Recognizing the most Innovative Business Brand",
                type: "team",
                nominees: [
                    { id: 301, name: "Falcon Project", votes: 570, image: "img/falconOne.jpeg" },
                    { id: 302, name: "Eleven Eleven", votes: 0, image: "img/eleven.jpeg" },
                    { id: 303, name: "Maya Luxury Hairs", votes: 5, image: "img/maya.png" },
                    { id: 304, name: "Wayward", votes: 0, image: "img/wayward.jpeg" },
                    { id: 305, name: "Chi Skin Care", votes: 15, image: "img/chi.jpeg" },

                ]
            },
            {
                id: 4,
                name: "Course Rep of the Year",
                description: "Recognizing the most efficient Course rep of the year",
                type: "individual",
                nominees: [
                    { id: 401, name: "Treasure", votes: 11, image: "img/treasure.jpeg" },
                    { id: 402, name: "francess", votes: 17, image: "img/francess.jpeg" },
                    { id: 403, name: "JohnnyAI", votes: 0, image: "img/johnnyAI.jpeg" },
                    { id: 404, name: "Simon", votes: 0, image: "img/simon.jpeg" }
                ]
            },
            {
                id: 5,
                name: "SportsPerson of the Year",
                description: "Recognizing the most athletic student in Computing",
                type: "individual",
                nominees: [
                    { id: 501, name: "Chuks", votes: 12, image: "img/chuks.jpeg" },
                    { id: 502, name: "Blacka", votes: 110, image: "img/blacka.jpeg" },
                    { id: 503, name: "Bright", votes: 93, image: "img/bright.jpeg" },
                    { id: 504, name: "Jay Jay", votes: 0, image: "img/jayjay.jpeg" },
                   { id: 505, name: "Ebenezer (OBA)", votes: 10, image: "" },
                   { id: 506, name: "DABIG4", votes: 5, image: "img/jude.jpeg" },
                  { id: 507, name: "Rachael", votes: 6, image: "img/rachael.jpeg" }
                            

                ]
            },
            {
                id: 6,
                name: "Best Dressed 100L",
                description: "Best Dressed 100L in Computing",
                type: "individual",
                nominees: [
                    { id: 601, name: "Godswill Enajewhe", votes: 40, image: "img/Godswill.jpeg" },
                    { id: 602, name: "Classic Clown", votes: 1, image: "img/clown.jpeg" },
                    { id: 603, name: "OZ", votes: 0, image: "img/OZx.jpeg" },
                    { id: 604, name: "Deba Oni", votes: 52, image: "img/Deba.jpeg" }
                ]
            },

            {
                id: 7,
                name: "Best Dressed Male",
                description: "Best Dressed Male in Computing",
                type: "individual",
                nominees: [
                    { id: 701, name: "Ogatosin", votes: 25, image: "img/ogatosin.jpeg" },
                    { id: 702, name: "Etinosa Frank", votes: 130, image: "img/Frank.jpeg" },
                    { id: 703, name: "Hassan Bello", votes: 0, image: "img/hassan.jpeg" },
                    { id: 704, name: "AbdulMalik", votes: 0, image: "img/Maleek.jpeg" }
            
                ]
            },

            {
                id: 8,
                name: "Best Dressed Female",
                description: "Best Dressed Female in Computing",
                type: "individual",
                nominees: [
                    { id: 701, name: "Francess", votes: 10, image: "img/francess.jpeg" },
                    { id: 702, name: "Maya", votes: 0, image: "img/maya.jpeg" },
                    { id: 703, name: "OY", votes: 0, image: "img/OY.jpeg" },
                    { id: 704, name: "Princess Lights", votes: 0, image: "img/princess.jpeg" },
                    { id: 705, name: "Rachael", votes: 51, image: "img/rachael.jpeg" },
                    { id: 706, name: "Treasure", votes: 4, image: "img/treasure.jpeg" }
                            
                ]
            },

            {
                id: 9,
                name: "Creative of the Year",
                description: "Recognizing the most Creative student in Computing",
                type: "individual",
                nominees: [
                    { id: 701, name: "Quavious DOP", votes: 0, image: "img/wayward.jpeg" },
                    { id: 702, name: "Christian", votes: 1, image: "img/christian.jpeg" },
                    { id: 703, name: "Princess Lights", votes: 0, image: "img/princess.jpeg" },
                    { id: 704, name: "Deba Oni", votes: 24, image: "img/Deba.jpeg" }
                ]
            },

            {
                id: 10,
                name: "Most Social Student",
                description: "Recognizing the most Social Student in Computing",
                type: "individual",
                nominees: [
                    { id: 1001, name: "Jessica", votes: 5, image: "img/jessica.jpeg" },
                    { id: 1002, name: "Double G", votes: 0, image: "img/doubleG.jpeg" },
                    { id: 1003, name: "Treasure", votes: 1, image: "img/treasure.jpeg" },
                    { id: 1004, name: "Princess Lights", votes: 0, image: "img/princess.jpeg" },
                    { id: 1005, name: "Nessa", votes: 32, image: "" }
                ]
            },

            {
                id: 11,
                name: "Content Creator of the Year",
                description: "Recognizing the most Influencer Student in Campus and Social Media",
                type: "individual",
                nominees: [
                    { id: 1101, name: "Hassan Bello", votes: 1, image: "img/hassan.jpeg" },
                    { id: 1102, name: "Bukola", votes: 0, image: "img/deborah.jpeg" },
                    { id: 1103, name: "Edwin", votes: 5, image: "img/edwin.jpeg" }
                ]
            },

            {
                id: 12,
                name: "Most Beautiful",
                description: "Recognizing the most beautiful student in Computing",
                type: "individual",
                nominees: [
                    { id: 1201, name: "Chloe", votes: 0, image: "img/khloe.jpg" },
                    { id: 1202, name: "Courtney Oluchi", votes: 27, image: "img/courtney.jpeg" },
                    { id: 1203, name: "Francess", votes: 1, image: "img/francess.jpeg" },
                    { id: 1204, name: "Princess Lights", votes: 0, image: "img/princess.jpeg" },
                    { id: 1205, name: "Treasure", votes: 16, image: "img/treasure.jpeg" }
                ]
                
            },

            {
                id: 13,
                name: "Programmer of the Year",
                description: "Recognizing the best Programmer in Computing",
                type: "individual",
                nominees: [
                    { id: 1301, name: "Ware", votes: 51, image: "img/Ware.jpeg" },
                    { id: 1302, name: "Clinton", votes: 0, image: "img/clinton.jpeg" },
                    { id: 1303, name: "Oamen Emmanuel", votes: 0, image: "" },
                    { id: 1304, name: "Ibu Emmanuel", votes: 0, image: "" },
                   { id: 1305, name: "Jay Jay", votes: 2, image: "img/jayjay.jpeg" }
                ]
                
            },

            {
                id: 14,
                name: "Entertainer of the year",
                description: "Recognizing the most funny student in Computing",
                type: "individual",
                nominees: [
                    { id: 1301, name: "Hamza", votes: 3, image: "img/hamza.jpeg" },
                    { id: 1302, name: "Double G", votes: 0, image: "img/doubleG.jpeg" },
                    { id: 1303, name: "Freddy", votes: 0, image: "img/freddy.jpeg" },
                    { id: 1304, name: "Classic Clown", votes: 1, image: "img/clown.jpeg" },
                    { id: 1305, name: "Fortune Oputa", votes: 14, image: "" }
                ]
                
            },

            {
                id: 15,
                name: "Lecturer of the Year",
                description: "Recognizing the Lecturer of the year",
                type: "individual",
                nominees: [
                    { id: 1501, name: "Dr. Seun Ogunfeyitimi", votes: 12, },
                    { id: 1502, name: "Mr. Akilo B.E", votes: 0,  },
                    { id: 1503, name: "Mr. Victor Eguavoen", votes: 3, },
                    { id: 1504, name: "Mrs. Odimayomi J.A", votes: 11,  },
                    { id: 1505, name: "Mr. Oyedotun S.A", votes: 1, }
                ]
                
            }
        ];

        // Variables to store charts and current filter
        const charts = {};
        let currentFilter = 'all';
        let searchTerm = '';

        // Initialize the page and set up event listeners
        document.addEventListener('DOMContentLoaded', function() {
            updateLastUpdated();
            renderCategories(awardData);
            
            // Set up search functionality
            document.getElementById('search-input').addEventListener('input', function(e) {
                searchTerm = e.target.value.toLowerCase();
                filterCategories();
            });
            
            // Set up category filters
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentFilter = this.getAttribute('data-filter');
                    filterCategories();
                });
            });
            
            // Set up refresh button
            document.getElementById('refresh-btn').addEventListener('click', function() {
                document.getElementById('loading').classList.remove('hidden');
                setTimeout(() => {
                    refreshData();
                    document.getElementById('loading').classList.add('hidden');
                }, 1000);
            });

            // Auto refresh every 30 seconds
            setInterval(refreshData, 30000);
   
        });

        // Update timestamp for last data refresh
        function updateLastUpdated() {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById('update-time').textContent = formattedTime;
        }

        // Render all category cards
        function renderCategories(categories) {
            const container = document.getElementById('categories-container');
            container.innerHTML = '';
            document.getElementById('loading').classList.add('hidden');
            
            if (categories.length === 0) {
                document.getElementById('no-results').classList.remove('hidden');
                return;
            } else {
                document.getElementById('no-results').classList.add('hidden');
            }
            
            categories.forEach(category => {
                const card = createCategoryCard(category);
                container.appendChild(card);
            });
        }

        // Create individual category card with chart and nominees list
        function createCategoryCard(category) {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.setAttribute('data-type', category.type);
            
            // Sort nominees by vote count (descending)
            category.nominees.sort((a, b) => b.votes - a.votes);
            const leadingNominee = category.nominees[0];
            
            // Create card header
            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = `
                <h2 class="category-title">${category.name}</h2>
                <div class="category-desc">${category.description}</div>
            `;
            card.appendChild(header);
            
            // Create chart container
            const chartContainer = document.createElement('div');
            chartContainer.className = 'chart-container';
            chartContainer.innerHTML = `<canvas id="chart-${category.id}"></canvas>`;
            card.appendChild(chartContainer);
            
            // Create nominees list
            const nomineesList = document.createElement('ul');
            nomineesList.className = 'nominees-list';
            
            category.nominees.forEach(nominee => {
                const isLeader = nominee.id === leadingNominee.id;
                const listItem = document.createElement('li');
                listItem.className = `nominee-item ${isLeader ? 'leader' : ''}`;
                listItem.innerHTML = `
                    <img src="${nominee.image}" alt="${nominee.name}" class="nominee-img">
                    <div class="nominee-info">
                        <div class="nominee-name">${nominee.name}</div>
                        <div class="vote-count">${nominee.votes} votes</div>
                    </div>
                `;
                nomineesList.appendChild(listItem);
            });
            
            card.appendChild(nomineesList);
            
            // Initialize chart after DOM is fully loaded
            setTimeout(() => {
                initChart(category);
            }, 0);
            
            return card;
        }

        // Initialize Chart.js chart for category
        function initChart(category) {
            const ctx = document.getElementById(`chart-${category.id}`).getContext('2d');
            
            // Prepare chart data
            const labels = category.nominees.map(n => n.name);
            const data = category.nominees.map(n => n.votes);
            const colors = generateColors(category.nominees.length);
            
            // Create chart
            charts[category.id] = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Votes',
                        data: data,
                        backgroundColor: colors,
                        borderColor: colors.map(c => c.replace('0.7', '1')),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `${context.raw} votes`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                precision: 0
                            }
                        }
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }

        // Generate different colors for chart bars
        function generateColors(count) {
            const baseColors = [
                'rgba(58, 134, 255, 0.7)',   // Blue
                'rgba(255, 0, 110, 0.7)',    // Pink
                'rgba(138, 201, 38, 0.7)',   // Green
                'rgba(255, 184, 0, 0.7)',    // Yellow
                'rgba(131, 56, 236, 0.7)',   // Purple
                'rgba(255, 122, 69, 0.7)'    // Orange
            ];
            
            const colors = [];
            for (let i = 0; i < count; i++) {
                colors.push(baseColors[i % baseColors.length]);
            }
            
            return colors;
        }

        // Filter categories based on search term and category type
        function filterCategories() {
            const filteredData = awardData.filter(category => {
                // Check if category matches the filter
                const matchesFilter = currentFilter === 'all' || category.type === currentFilter;
                
                // Check if category or nominees match the search term
                const matchesSearch = searchTerm === '' || 
                    category.name.toLowerCase().includes(searchTerm) ||
                    category.description.toLowerCase().includes(searchTerm) ||
                    category.nominees.some(nominee => nominee.name.toLowerCase().includes(searchTerm));
                
                return matchesFilter && matchesSearch;
            });
            
            renderCategories(filteredData);
        }

       // Refresh data without changing vote counts
function refreshData() {
    // Only refresh the display with existing data
    filterCategories();
    
    // If you still want to update the charts to ensure they're displayed correctly
    awardData.forEach(category => {
        if (charts[category.id]) {
            charts[category.id].update();
        }
    });
    
    // If you're keeping the time update (or replace with your own code if you've changed this)
    if (typeof updateLastUpdated === 'function') {
        updateLastUpdated();
    }
}
