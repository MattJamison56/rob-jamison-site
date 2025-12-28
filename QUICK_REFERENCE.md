# Quick Reference Guide - Making Updates

This guide shows you how to make common updates to the Robert Jamison CPA website.

## Updating Page Content

### Edit Homepage Text
**File:** `src/pages/Home.tsx`

```tsx
// Change main heading
<h1>Your New Text Here</h1>

// Change subtitle
<p>Your new subtitle text</p>
```

### Edit About Us Page
**File:** `src/pages/AboutUs.tsx`

Simply update the text within the component. All content is in plain HTML/JSX.

### Edit Service Pages
**Files:** 
- `src/pages/what-we-do/TaxPreparation.tsx`
- `src/pages/what-we-do/TaxAdvisory.tsx`
- `src/pages/what-we-do/Accounting.tsx`
- `src/pages/what-we-do/TaxResolution.tsx`

Each page follows the same structure - just update the text content.

## Changing Navigation

### Add/Remove Menu Items
**File:** `src/utils/navigation.ts`

```tsx
export const navigationItems: MenuItem[] = [
  {
    label: 'Menu Name',
    path: '/menu-path',
    subItems: [ // Optional - remove if no dropdown
      { label: 'Sub Item', path: '/menu-path/sub-item' },
    ],
  },
  // Add more items...
];
```

### Update Company Name in Header
**File:** `src/components/Navbar.tsx`

```tsx
<span className="text-xl font-bold text-gray-900">
  Your Company Name Here
</span>
```

## Styling & Design

### Change Color Scheme
**File:** `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  },
}
```

Then replace `bg-blue-600` with `bg-primary` throughout components.

### Update Button Styles
Find all instances of:
```tsx
className="bg-blue-600 text-white hover:bg-blue-700"
```
And change colors as needed.

## Contact Form

### Change Form Fields
**File:** `src/pages/Contact.tsx`

To add a field:
```tsx
// 1. Add to state
const [formData, setFormData] = useState({
  // existing fields...
  newField: '',
});

// 2. Add validation in validateForm()
if (!formData.newField.trim()) {
  newErrors.newField = 'Field is required';
}

// 3. Add input in JSX
<input
  type="text"
  name="newField"
  value={formData.newField}
  onChange={handleChange}
/>
```

### Connect Form to Email Service

Replace the `handleSubmit` function in `Contact.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (validateForm()) {
    try {
      // Example: Send to your backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Reset form...
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
  }
};
```

## Search Functionality

### Update Searchable Content
**File:** `src/utils/navigation.ts`

```tsx
const pages = [
  { 
    title: 'Page Title',
    path: '/page-path',
    keywords: ['keyword1', 'keyword2', 'search', 'terms']
  },
  // Add more pages...
];
```

## Footer

### Update Footer Content
**File:** `src/components/Footer.tsx`

```tsx
// Add contact info
<p>Email: info@example.com</p>
<p>Phone: (555) 123-4567</p>

// Add social media links
<a href="https://linkedin.com/...">LinkedIn</a>
```

## Adding New Pages

### Step 1: Create Page Component
**New File:** `src/pages/YourNewPage.tsx`

```tsx
const YourNewPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Page Title
      </h1>
      <p>Your content here...</p>
    </div>
  );
};

export default YourNewPage;
```

### Step 2: Add Route
**File:** `src/App.tsx`

```tsx
import YourNewPage from './pages/YourNewPage';

// In Routes section:
<Route path="/your-new-page" element={<YourNewPage />} />
```

### Step 3: Add to Navigation
**File:** `src/utils/navigation.ts`

Add to `navigationItems` array (see "Changing Navigation" above)

## Common Tailwind CSS Classes

### Text Sizes
- `text-sm` - Small
- `text-base` - Normal
- `text-lg` - Large
- `text-xl` - Extra Large
- `text-2xl` through `text-6xl` - Headings

### Spacing
- `p-4` - Padding (all sides)
- `px-4` - Padding left/right
- `py-4` - Padding top/bottom
- `m-4` - Margin (same pattern)
- `space-y-4` - Vertical spacing between children

### Colors
- `text-gray-900` - Text color
- `bg-blue-600` - Background color
- `border-gray-300` - Border color
- `hover:bg-blue-700` - Hover state

### Layout
- `flex` - Flexbox layout
- `grid` - Grid layout
- `max-w-7xl` - Max width
- `mx-auto` - Center horizontally
- `hidden md:flex` - Hidden on mobile, flex on desktop

## Testing Changes

```bash
# Start development server
npm run dev

# View at http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying Changes

```bash
# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub (triggers auto-deploy on Vercel)
git push origin main
```

## Getting Help

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Router Docs:** https://reactrouter.com
- **TypeScript Docs:** https://www.typescriptlang.org/docs
- **Vite Docs:** https://vitejs.dev/guide

## Common Issues

**Changes not showing up?**
- Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check terminal for errors
- Restart dev server

**Build errors?**
- Check syntax in files you edited
- Make sure all imports are correct
- Run `npm install` if you added packages

**TypeScript errors?**
- Make sure prop types match
- Add proper type annotations
- Check for typos in variable names
