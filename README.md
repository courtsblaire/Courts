# Christmas Advent Calendar 🎄

A beautiful, interactive advent calendar where you can upload your own photos for each day of December!

## How to Add Your Photos

### Method 1: Via GitHub (Recommended)

1. Go to the repository page
2. Click "Add file" → "Upload files"
3. Create a folder called `images`
4. Upload your photos with these names:
   - `background.jpg` (400x533px recommended) - The main calendar background
   - `day1.jpg` through `day24.jpg` - One photo for each day
5. Commit the changes

### Method 2: Edit the Code

You can also use external image URLs:
1. Open `calendar.js`
2. Find the `photoData` array
3. Replace `images/day1.jpg` with your image URL (e.g., from Imgur, your website, etc.)
4. Update the captions if desired

## Features

✨ **Interactive doors**: Click on each numbered day to reveal your photo
📅 **Date-based unlocking**: Doors only unlock on their respective dates in December
🎨 **Beautiful design**: Modern gradient background with smooth animations
📱 **Mobile friendly**: Works great on all devices
🔒 **Private photos**: Your photos are stored in your GitHub repository - only people with the link can see them

## View Your Calendar

Once GitHub Pages is enabled, your calendar will be available at:
`https://courtsblaire.github.io/Courts/`

## How It Works

- Days before December: All doors are disabled
- Current day in December: That day's door unlocks and can be opened
- Past days: Doors are marked as "opened" and can be clicked to view photos again
- Future days: Doors remain locked until their date arrives

## Customization

You can customize:
- **Photos**: Upload any images you want (memories, quotes, drawings, etc.)
- **Captions**: Edit the captions in `calendar.js`
- **Colors**: Modify the gradient in `style.css`
- **Title**: Change the header text in `index.html`

## Sharing

Simply share your GitHub Pages URL with anyone you want to give access to your calendar. Since the repository is public, anyone with the link can view it!

Enjoy your advent calendar! 🎅🎁
