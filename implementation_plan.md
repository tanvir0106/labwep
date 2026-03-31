# Lab Report Generator Website

This project will build a premium React web application that allows users to input their lab report details and instantly view a live preview of the generated PDF document, which they can then download. 

## Proposed Changes

### 1. Workspace Initialization
- Use Vite to scaffold a new React project in `d:\web\lab_wep` (`npx -y create-vite@latest ./ --template react`).
- Install necessary dependencies: `@react-pdf/renderer` for PDF generation.

### 2. Form Component
- Create a comprehensive form capturing the standard lab report fields:
  - **Basic Info**: Name, ID, Section, Course Name, Experiment Name, Experiment No, Date.
  - **Content Areas**: Objective, Theory, Apparatus, Procedure, Data & Calculation, Results & Conclusion.
- Implement React state management (e.g., using `useState` or a reducer) to hold these values and pass them down to the PDF document.

### 3. PDF Document Component (`LabReportPDF.jsx`)
- Use `@react-pdf/renderer` components (`Document`, `Page`, `Text`, `View`, `StyleSheet`) to layout the lab report professionally.
- Automatically wrap text and format headers/subheaders based on the provided inputs.

### 4. Layout & Styling (`App.jsx` & `index.css`)
- **Responsive Split Layout**: 
  - Left pane: Scrollable input form with a clean, premium, glassmorphic or minimal modern dark/light aesthetic using Vanilla CSS.
  - Right pane: Sticky `PDFViewer` from `@react-pdf/renderer` showing the live preview.
- **Vanilla CSS**: We will focus on smooth transitions, modern typography (e.g., Inter font), and well-structured input fields.

## User Review Required
> [!NOTE]
> Please confirm if the listed fields (Name, ID, Section, Course Name, Experiment Name, Experiement No, Date, Objective, Theory, Apparatus, Procedure, Data, Results) are sufficient, or if you need any extra sections (like a space for inserting images/graphs). 
> Also, let me know if you would prefer a **Dark Mode** or a **Light Mode** styling aesthetic!

## Verification Plan

### Automated Tests
- Run `npm run dev` to start the Vite server. 
- Ensure no console errors occur during the React render or PDF generation cycle.

### Manual Verification
1. Open the local application link in a browser.
2. Type mock data into all the input fields.
3. Observe the right-pane PDF preview updating in real-time.
4. Click the "Download PDF" button and verify the resulting file opens correctly in a standard PDF viewer (like Chrome or Acrobat) with all the text styled properly.
