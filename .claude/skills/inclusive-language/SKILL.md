---
name: "inclusive-language"
description: "Use when writing or reviewing project text (UI copy, docs, READMEs, error messages, marketing, code comments) to check for inclusive, accessible language and suggest respectful alternatives."
---

# Inclusive Language Guide

Based on Reedsy's guide to inclusive language (https://reedsy.com/blog/inclusive-language/), adapted for product and project writing.

Inclusive language describes people accurately and respectfully, especially groups that are often marginalized: people of color and Indigenous people, LGBTQ+ people, disabled and neurodivergent people. Age, class and religion deserve the same care.

## When to use this skill

- Writing new text: UI strings, onboarding, emails, docs, help articles, release notes, marketing pages, alt text, code comments.
- Reviewing a diff, a doc or a copy deck for language issues.
- Someone asks "is this wording OK?" or "make this more inclusive".

## Core principles

1. **Look past the obvious.** Slurs and stereotypes are easy to spot. Also check for quieter exclusion, such as "we" or "everyone" statements that assume all readers share one background, body or ability.
2. **Only mention identity when it is relevant.** Drop race, gender, disability, age or other descriptors that add nothing to the point.
3. **Accuracy and neutrality first.** Product and documentation text is nonfiction: hold it to a high standard. Prefer plain, specific words over loaded ones.
4. **Ask, don't assume.** When writing about real people (case studies, testimonials, bios), use the terms they use for themselves.
5. **Get a second pair of eyes.** For sensitive content, recommend review by a sensitivity reader, a member of the community concerned, or a copy editor.

## Race, ethnicity and nationality

- Don't use racial or ethnic descriptors that invite stereotypes unless they matter to the context.
- Don't go "colorblind" when race or ethnicity genuinely matters to the content.
- Keep the concepts distinct: **race** (social self-identification), **ethnicity** (culture or origin), **nationality** (legal citizenship).
- Capitalize **Black** when it refers to race or ethnicity, and capitalize the names of Indigenous communities. Keep **white** lowercase.
- No hyphen in compound nouns ("Asian American"); hyphenate compound adjectives ("a Mexican-American dish").
- Avoid slurs and outdated terms, except when the term itself is the subject being discussed.

| Avoid | Prefer |
|---|---|
| Oriental | Asian, or the specific nationality/ethnicity |
| colored people; "ethnics" (as a noun) | people of color, or the specific identity |
| mixed race | multiracial, dual heritage |
| minority (when not numerically accurate) | marginalized |
| Eskimo | Inuit, Iñupiat, Yupik, Aleut (the specific group) |

## Gender, sex and sexuality

Definitions to keep straight:
- **Sex**: physical characteristics, often assigned at birth; includes intersex people and differences of sex development.
- **Gender**: social identity and internal sense of self; a spectrum.
- **Sexuality**: sexual orientation or romantic attraction.

Guidance:
- Use gender-neutral wording unless gender is directly relevant.
- When gender is unknown or irrelevant, use singular "they" or address the reader as "you". Avoid "he/she" and "s/he". Rewording to drop the pronoun often works best.
- Avoid gendered stereotypes as shorthand.
- Never assume someone's sexuality; mention it only with their consent.
- Treat umbrella terms (LGBTQ+, LGBTQIA+, queer community) as umbrellas; don't swap one in for a single identity, or the reverse.
- "Queer" is reclaimed by many but was a slur; ask before applying it to an individual.
- Forms: don't make gender a required field unless it is truly needed; offer inclusive options and a way to self-describe or decline.

| Avoid | Prefer |
|---|---|
| fireman, policeman | firefighter, police officer |
| chairman, chairwoman | chair |
| actress | actor |
| mankind | humanity, people, humans |
| male nurse, female doctor | nurse, doctor |
| the best man for the job | the best person for the job |
| guys (for a group) | everyone, folks, people, you all, team |
| homosexual | gay |
| bi-sexual | bisexual |
| openly gay | out |
| sexual preference | sexual orientation |
| biological sex | assigned sex (at birth) |
| opposite sex, both sexes | another/different sex, all sexes |
| "who used to be a man/woman" | use the person's current name and pronouns |

## Disability and neurodiversity

- Avoid ableist idioms even when they feel harmless.
- Choose general or specific language by context. For real people, follow their preference; for groups, follow the community's prevailing preference.
- **Person-first vs identity-first:**
  - Person-first ("people with autism") has been the US norm and stresses that disability is one part of a person.
  - Identity-first ("autistic people", "Deaf people") is common in the UK and preferred by many Deaf and autistic communities and some US advocates.
  - Check individual preference where possible, and follow established disability organizations for regional norms. Pick one approach per document and stay consistent unless an individual prefers otherwise.
- Don't frame people as patients, victims or broken.

| Avoid | Prefer |
|---|---|
| the disabled, the blind (as a monolith) | disabled people / people with disabilities; blind people / people with visual impairments |
| suffers from [condition], afflicted with | has [condition] |
| confined to a wheelchair, wheelchair-bound | wheelchair user, uses a wheelchair |
| crazy, insane, psycho (as descriptors) | wild, unpredictable, chaotic, surprising, unexpected |
| lame, crippling (negative sense) | say what you mean: weak, unconvincing, severe, blocking |
| medicalizing labels for people | person-first or identity-first terms |

Project examples: "This bug is crippling the build" → "This bug is blocking the build". "That's a crazy edge case" → "That's an unusual edge case". "Sanity check" → "quick check" or "confidence check".

## How to review text

1. Read the text and flag each issue with: the exact phrase, the category (race/ethnicity, gender/sexuality, disability, implicit exclusion, other), why it may exclude or harm, and one or two concrete replacements.
2. Prefer the smallest edit that fixes the issue; keep the author's tone and meaning.
3. Don't flag a term when it is being quoted or discussed as a term, or when it is a proper name, a legal/technical term that must match an external source, or a self-description by the person concerned. Note these as "kept intentionally" if useful.
4. For code: identifiers, config keys and public APIs may be breaking changes. Suggest the rename but call out the compatibility impact (aliases, deprecation) instead of silently changing them.
5. If unsure whether a term is preferred by a community, say so and point to a resource below rather than guessing.

Output format for reviews:

```
- "<phrase>" (file:line or location)
  Category: <category>
  Why: <one sentence>
  Suggest: "<replacement>"
```

End with a short summary: number of issues by category, and any items needing a human decision.

## Self-check before shipping

- Is every demographic detail relevant?
- No slurs, stereotypes or ableist idioms?
- Pronouns, job titles and group address gender-neutral where gender doesn't matter?
- Identity and disability terms checked against the people concerned or a reliable style guide?
- Does sensitive content need a sensitivity reader or community review?

## Further resources

- Conscious Style Guide
- Diversity Style Guide
- 18F Content Guide: Inclusive language
- NLGJA Stylebook
- GLAAD Media Reference Guide