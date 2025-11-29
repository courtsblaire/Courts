// Advent Calendar JavaScript
// This calendar allows you to upload your own photos for each day

const myCal = document.getElementById('adventCal');
const currentDate = new Date();

// Photo paths - YOU CAN REPLACE THESE WITH YOUR OWN PHOTO URLS
// To add your photos:
// 1. Create an 'images' folder in this repository
// 2. Upload 24 photos named day1.jpg, day2.jpg, etc.
// 3. Or replace the URLs below with your photo URLs
const photoData = [
    { day: 1, image: 'images/day1.jpg', caption: 'Day 1 of Advent!' },
    { day: 2, image: 'images/day2.jpg', caption: 'Day 2 of Advent!' },
    { day: 3, image: 'images/day3.jpg', caption: 'Day 3 of Advent!' },
    { day: 4, image: 'images/day4.jpg', caption: 'Day 4 of Advent!' },
    { day: 5, image: 'images/day5.jpg', caption: 'Day 5 of Advent!' },
    { day: 6, image: 'images/day6.jpg', caption: 'Day 6 of Advent!' },
    { day: 7, image: 'images/day7.jpg', caption: 'Day 7 of Advent!' },
    { day: 8, image: 'images/day8.jpg', caption: 'Day 8 of Advent!' },
    { day: 9, image: 'images/day9.jpg', caption: 'Day 9 of Advent!' },
    { day: 10, image: 'images/day10.jpg', caption: 'Day 10 of Advent!' },
    { day: 11, image: 'images/day11.jpg', caption: 'Day 11 of Advent!' },
    { day: 12, image: 'images/day12.jpg', caption: 'Day 12 of Advent!' },
    { day: 13, image: 'images/day13.jpg', caption: 'Day 13 of Advent!' },
    { day: 14, image: 'images/day14.jpg', caption: 'Day 14 of Advent!' },
    { day: 15, image: 'images/day15.jpg', caption: 'Day 15 of Advent!' },
    { day: 16, image: 'images/day16.jpg', caption: 'Day 16 of Advent!' },
    { day: 17, image: 'images/day17.jpg', caption: 'Day 17 of Advent!' },
    { day: 18, image: 'images/day18.jpg', caption: 'Day 18 of Advent!' },
    { day: 19, image: 'images/day19.jpg', caption: 'Day 19 of Advent!' },
    { day: 20, image: 'images/day20.jpg', caption: 'Day 20 of Advent!' },
    { day: 21, image: 'images/day21.jpg', caption: 'Day 21 of Advent!' },
    { day: 22, image: 'images/day22.jpg', caption: 'Day 22 of Advent!' },
    { day: 23, image: 'images/day23.jpg', caption: 'Day 23 of Advent!' },
    { day: 24, image: 'images/day24.jpg', caption: 'Day 24 - Christmas Eve!' }
];

// Door constructor
function Door(calendar, day) {
    this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
    this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
    this.x = (0.04 * calendar.width + ((day - 1) % 4) * (1.1 * this.width));
    this.y = -(0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height));
    this.photoData = photoData[day - 1];
    
    this.content = function() {
        const node = document.createElement('li');
        document.getElementById('adventDoors').appendChild(node);
        node.id = 'door' + day;
        node.style.cssText = `width: ${this.width}px; height: ${this.height}px; top: ${this.y}px; left: ${this.x}px;`;
        
        const innerNode = document.createElement('a');
        document.getElementById('door' + day).appendChild(innerNode);
        innerNode.innerHTML = day;
        innerNode.href = '#';
        
        const photoInfo = this.photoData;
        
        // Check if date is in December and if the day has arrived
        if ((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
            innerNode.className = 'disabled';
            innerNode.onclick = function() {
                return false;
            };
        } else {
            // Mark as opened if already past
            if (currentDate.getDate() > day) {
                innerNode.className = 'opened';
            }
            
            innerNode.onclick = function() {
                openModal(photoInfo.image, photoInfo.caption);
                if (!innerNode.classList.contains('opened')) {
                    innerNode.classList.add('opened');
                }
                return false;
            };
        }
    };
}

// Modal functions
function openModal(imageSrc, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    captionText.innerHTML = caption;
}

// Close modal when clicking the X
const closeBtn = document.getElementsByClassName('close')[0];
if (closeBtn) {
    closeBtn.onclick = function() {
        document.getElementById('imageModal').style.display = 'none';
    };
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Create all doors
(function() {
    const doors = [];
    for (let i = 0; i < 24; i++) {
        doors[i] = new Door(myCal, i + 1);
        doors[i].content();
    }
    return doors;
})();
