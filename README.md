# Vincent Portfolio 2026

## Description

This is the latest version of my personal portfolio.

My previous portfolios were built while I was making the move into software development. Since then, my career has shifted pretty heavily toward data, infrastructure, analysis, automation, compliance, technical leadership, and managing a development-focused data team. The old site no longer really explained what I do, so it was time to rebuild it.

I also wanted an excuse to spend more time with Vue.js.

The result is a database-inspired portfolio that feels closer to the work I do every day while still leaving room for my older web projects, personal interests, and some of my personality.

By: **Vincent Toon**

## What Is in the Portfolio?

The site includes:

- A professional overview of my current role as Director of Data & Technology
- A high-level look at the scale and variety of the data environment I help manage
- Generalized descriptions of professional projects without exposing private company details
- Personal web-development projects from different stages of my career
- Technical capabilities, tools, frameworks, and platforms
- Leadership, management, compliance, and audit experience
- Previous employment and education
- Personal interests, sports, music, games, media, family, pets, and craft beer
- A downloadable résumé in PDF and Word formats
- A contact form that sends messages directly from the static site, plus email and LinkedIn fallbacks

The lower half of the site behaves like a small database explorer. Visitors can switch between tables, search records, and open individual entries for more detail.

## Why It Looks Like a Database

My original portfolios were much more focused on front-end development because that was the direction I was pursuing at the time.

Today, most of my work happens around MySQL, Python, AWS, Linux, data analysis, data modeling, automation, internal tools, compliance, and technical operations. A database-style interface felt like a better way to present that experience than another standard grid of project cards.

It also gave me a fun reason to build:

- Searchable and filterable data
- Desktop tables that become expandable records on smaller screens
- Reusable status badges and color groups
- Nested record details
- Responsive navigation
- A mobile schema selector
- A contact workflow designed for a static GitHub Pages deployment

## Why Vue.js?

This is my first portfolio built with Vue.js.

I have worked with React, Next.js, JavaScript, PHP, Retool, and other front-end tools, but I wanted more hands-on experience with Vue's component structure and reactive approach.

This project gave me practice with:

- Vue single-file components
- `ref` and `computed`
- Reusable components and props
- Conditional rendering
- Dynamic classes
- Transitions and Teleport
- Custom browser events
- Responsive component behavior
- Data-driven page content
- Keeping most portfolio copy in one maintainable data file

## Things I Learned

The biggest lesson was that responsive design is not just making the desktop page narrower.

The database explorer needed to behave differently depending on the screen:

- Desktop uses a full table and modal record windows
- Tablet and mobile use compact records with inline expandable details
- The schema browser collapses at smaller widths
- Mobile navigation can jump directly to a specific database category
- The hero changes order so the name and title appear before the image

I also spent a lot of time making sure the professional project descriptions were useful without oversharing company systems, internal logic, private data, or infrastructure details.

## Project Notes

Some professional projects are intentionally generalized. They describe the purpose, overall flow, and technologies involved, but leave out proprietary rules, data sources, client details, internal table names, credentials, and exact infrastructure.

For those projects: **inquire for more details**.

The site is hosted on GitHub Pages, so the contact form uses FormSubmit as a lightweight external form endpoint. The form sends from the page without requiring the visitor to configure a local email application. Visitors are asked not to submit sensitive information through the form.

## Future Improvements

A few things I may still add later:

- More screenshots or lightweight visual examples
- Additional personal projects
- More animation, as long as it does not get in the way
- Whatever new responsibilities make this portfolio outdated next

## Questions?

Questions, comments, opportunities, or unusually interesting data problems?

**vincenttoon22@gmail.com**


## Résumé

The current one-page résumé is included in both PDF and Word formats. It is linked from the main navigation, hero section, contact panel, mobile menu, and footer.

## Contact Form Setup

The contact form posts to FormSubmit from the Vue component. After the first deployment, submit one test message yourself and confirm the activation email sent to `vincenttoon22@gmail.com`. That one-time confirmation enables future portfolio submissions.
