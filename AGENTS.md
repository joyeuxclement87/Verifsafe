# Verifsafe / Product UI Engineering Rules

## Project Mission

Build a high-quality, trustworthy, modern product with interfaces that feel intentionally designed by an experienced product designer and frontend engineer.

The goal is not simply to make the application functional.

Every implementation should aim for:

* Clear user experience
* Strong visual hierarchy
* Original and intentional design
* Excellent responsiveness
* Maintainable code
* Accessibility
* High perceived quality
* Trust and professionalism

Avoid interfaces that look obviously AI-generated, generic, templated, or copied from a standard SaaS dashboard.

---

# 1. Core Working Principles

Before making changes:

1. Understand the user's request.
2. Inspect the relevant existing code before editing.
3. Reuse existing patterns and components where appropriate.
4. Identify the smallest set of changes required.
5. Consider the user experience, not only the code.
6. Implement carefully.
7. Verify the result.

Do not blindly generate large amounts of code without first understanding the existing architecture.

Do not rewrite unrelated files.

Do not introduce new dependencies unless they provide clear value.

When requirements are unclear, inspect the existing project for patterns and infer the most consistent solution.

---

# 2. UI Philosophy

Every screen must have a clear purpose.

Before implementing a UI, determine:

* Who is using this screen?
* What is the primary task?
* What information is most important?
* What action should the user notice first?
* What information can be secondary or hidden?
* What should the user feel when using this screen?

Design around the user's task, not around a collection of components.

Do not automatically start with a navbar, hero section, cards, and a grid.

Choose the layout that best serves the content.

---

# 3. Avoid Generic AI-Generated UI

Do NOT default to the typical AI-generated SaaS aesthetic.

Avoid excessive use of:

* Purple gradients
* Random gradients
* Glassmorphism
* Oversized rounded cards
* Cards inside cards inside cards
* Excessive shadows
* Excessive border radius
* Every section being placed inside a container
* Four identical statistic cards at the top of every dashboard
* Giant headings with little meaningful content
* Decorative blobs
* Random floating elements
* Excessive icons
* Emoji used as interface decoration
* Large empty spaces without purpose

Do not make every interface look like the same dashboard template.

Use visual decoration only when it improves the experience.

---

# 4. Visual Hierarchy

Every page should establish a clear hierarchy.

Use these tools intentionally:

* Typography
* Size
* Weight
* Spacing
* Contrast
* Alignment
* Position
* Color

The user should immediately understand:

1. Where they are.
2. What the most important information is.
3. What they can do next.

Do not give every element equal visual importance.

Primary actions should be obvious.

Secondary actions should not compete with primary actions.

---

# 5. Typography

Typography is a major part of the interface design.

Use typography to create hierarchy rather than relying only on cards, borders, and colors.

Rules:

* Do not use too many font sizes.
* Establish a consistent type scale.
* Use font weight intentionally.
* Prefer readable line lengths.
* Use comfortable line height.
* Avoid unnecessarily large headings.
* Do not make all text bold.
* Secondary information should be visually quieter.
* Dense interfaces should remain readable.

Headings should communicate structure.

Body text should be easy to scan.

Important information should not depend only on color.

---

# 6. Spacing and Layout

Spacing should be systematic and intentional.

Prefer a consistent spacing scale.

Before adding a border or card, first ask:

> Can spacing and typography create the separation instead?

Use whitespace as a design tool.

Do not:

* Add random margins.
* Use inconsistent gaps.
* Overcrowd interfaces.
* Leave large empty areas without purpose.
* Center everything by default.

Use asymmetry when it improves hierarchy or composition.

However, never sacrifice usability purely for visual experimentation.

---

# 7. Color

Use color purposefully.

Color should communicate:

* Priority
* Status
* Actions
* Feedback
* Brand identity

Do not use many accent colors without a reason.

Reserve strong accent colors for important moments.

Maintain sufficient contrast for readability and accessibility.

Do not rely exclusively on red or green to communicate status.

---

# 8. Cards and Surfaces

Cards are not the default solution to grouping information.

Before creating a card, ask:

> Does this content actually need a separate surface?

Use cards when they improve:

* Grouping
* Scannability
* Interaction
* Content separation

Avoid excessive nesting of surfaces.

Prefer clean layouts where content hierarchy can be established through spacing and typography.

---

# 9. Components

Before creating a new component:

1. Search for an existing reusable component.
2. Check the existing design system.
3. Reuse existing patterns where appropriate.
4. Create a new component only when it improves reuse or clarity.

Components should:

* Have a clear responsibility.
* Be reasonably small.
* Have understandable APIs.
* Avoid unnecessary configuration.
* Avoid excessive prop complexity.
* Support accessibility.

Do not create abstractions for one-time code unless they clearly improve readability.

---

# 10. Responsive Design

Every UI change must consider:

* Mobile
* Tablet
* Desktop

Do not treat mobile as an afterthought.

On smaller screens:

* Preserve the primary action.
* Maintain readable typography.
* Avoid horizontal overflow.
* Simplify dense layouts where necessary.
* Reconsider navigation.
* Reorder content when appropriate.

Do not simply shrink the desktop layout.

Design the mobile experience intentionally.

---

# 11. Interaction Design

Interactive elements should provide clear feedback.

Consider states for:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading
* Success
* Error
* Empty

Animations should have a purpose.

Use motion to:

* Explain changes
* Provide feedback
* Guide attention
* Make transitions feel natural

Avoid animation that exists only as decoration.

Respect reduced-motion preferences where appropriate.

---

# 12. Forms and User Input

Forms should feel simple and predictable.

Rules:

* Clearly label inputs.
* Provide useful validation feedback.
* Do not make users guess what went wrong.
* Preserve entered data when possible.
* Clearly communicate required fields.
* Show loading states during important submissions.
* Prevent accidental duplicate submissions.

Error messages should explain how the user can fix the problem.

---

# 13. Empty, Loading, and Error States

Do not leave unfinished states.

Every significant feature should consider:

* Empty state
* Loading state
* Error state
* Success state

Empty states should help users understand:

* What this area is.
* Why it is empty.
* What they can do next.

Loading states should not cause unnecessary layout shifts.

Errors should be understandable and actionable.

---

# 14. Accessibility

Accessibility is part of implementation quality.

Ensure:

* Keyboard navigation works.
* Focus states are visible.
* Interactive elements are correctly identified.
* Buttons are used for actions.
* Links are used for navigation.
* Form fields have labels.
* Images have appropriate alternative text.
* Color is not the only source of meaning.
* Contrast remains readable.

Do not remove focus indicators without providing an accessible replacement.

---

# 15. Code Quality

Prioritize:

* Readability
* Maintainability
* Consistency
* Correctness
* Simplicity

Avoid:

* Dead code
* Unused imports
* Duplicate logic
* Unnecessary dependencies
* Massive components
* Deeply nested conditional rendering
* Magic values scattered throughout the codebase

Extract repeated logic when there is a clear reuse case.

Prefer simple, explicit code over clever code.

Follow the existing project's conventions unless there is a strong reason to improve them.

---

# 16. Feature Implementation Workflow

For significant features, follow this process.

## Step 1: Inspect

Understand:

* Relevant files
* Existing components
* Existing patterns
* Data flow
* Styling system

## Step 2: Plan

Before making major changes, identify:

* Files to modify
* Components to reuse
* New components required
* Data requirements
* Edge cases
* Verification steps

## Step 3: Design

For UI work, decide:

* Primary user action
* Information hierarchy
* Layout
* Responsive behavior
* Important states

Do not start implementation until there is a clear design direction.

## Step 4: Implement

Build the smallest clean solution that satisfies the requirements.

## Step 5: Review

Check:

* Visual hierarchy
* Responsiveness
* Accessibility
* Edge cases
* Code quality

## Step 6: Verify

Run the relevant available checks, such as:

* Type checking
* Linting
* Tests
* Build

Do not claim that something was tested if it was not tested.

---

# 17. Creative UI Exploration

When asked to create a new major interface, do not immediately choose the first obvious layout.

Briefly explore multiple possible design directions internally.

Consider approaches such as:

* Editorial
* Minimal
* Dense information interface
* Premium product interface
* Utility-focused
* Experimental but usable
* Data-focused
* Conversational

Choose the direction that best fits the product and user.

Originality is encouraged.

However:

> Clarity and usability always come before visual novelty.

---

# 18. UI Quality Review

Before considering UI work complete, perform a final visual review.

Ask:

### Hierarchy

* What does the user notice first?
* Is that the correct thing?
* Are secondary elements too visually strong?

### Layout

* Is spacing consistent?
* Is alignment intentional?
* Are there unnecessary containers or borders?

### Typography

* Is the type hierarchy clear?
* Is anything unnecessarily large or small?
* Is text easy to scan?

### Generic Design

* Does this look like a default AI-generated interface?
* Does it overuse cards, gradients, shadows, or rounded rectangles?
* Is there an opportunity to simplify?

### Responsiveness

* Does it work on small screens?
* Does the layout adapt intentionally?

### Interaction

* Are important states handled?
* Is feedback clear?

Make targeted improvements before finishing.

---

# 19. Definition of Done

A task is not complete simply because the code compiles.

For UI work, completion means:

* The requested functionality works.
* The interface has clear hierarchy.
* The design is intentional.
* Responsive behavior has been considered.
* Important states have been handled.
* Accessibility has been considered.
* Existing patterns have been respected.
* The code is clean.
* Relevant verification has been performed.

---

# 20. Final Rule

Do not optimize only for producing code quickly.

Optimize for producing a result that a skilled product designer and senior frontend engineer would be comfortable shipping.

When choosing between:

* More UI elements and fewer meaningful elements
* More decoration and better hierarchy
* More abstraction and simpler code
* A trendy pattern and a usable pattern

Prefer clarity, quality, and intentional design.
