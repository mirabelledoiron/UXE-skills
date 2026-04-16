# Source 6: Web Content Accessibility Guidelines (WCAG) 2.1

- Type: url
- URL: https://www.w3.org/TR/WCAG21
- Part: 1 of 4
- Ingest note: Source text was truncated during ingestion to fit bundle limits.
- Note: Raw extracted source material preserved during generation.

Web Content Accessibility Guidelines (WCAG) 2.1
 

 
 
 
 
 

 

 
 
 
 Web Content Accessibility Guidelines (WCAG) 2.1 
 W3C Recommendation 06 May 2025
 
 More details about this document
 
 This version:
 https://www.w3.org/TR/2025/REC-WCAG21-20250506/
 
 Latest published version:
 https://www.w3.org/TR/WCAG21/
 
 Latest editor's draft:https://w3c.github.io/wcag/guidelines/
 History:
 https://www.w3.org/standards/history/WCAG21/
 
 Commit history
 
 
 Implementation report:
 https://www.w3.org/WAI/WCAG21/implementation-report/
 
 
 
 Previous Recommendation:https://www.w3.org/TR/WCAG20/
 Editors:
 Andrew Kirkpatrick (Adobe)
 
 Joshue O Connor (Invited Expert, InterAccess)
 
 Alastair Campbell (Nomensa)
 
 Michael Cooper (W3C)
 
 
 
 Feedback:
 GitHub w3c/wcag
 (pull requests,
 new issue,
 open issues)
 public-agwg-comments@w3.org with subject line [WCAG21] … message topic … (archives)
 Errata:Errata exists.
 
 
 
 
 See also
 
 translations.
 
 
 
 Copyright
 ©
 2020-2025
 
 World Wide Web Consortium.
 W3C®
 liability,
 trademark and
 document use rules apply.
 
 
 
 Abstract
 Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making web content more accessible. Following these guidelines will make content more accessible to a wider range of people with disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement, speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines address accessibility of web content on any kind of device (including desktops, laptops, kiosks, and mobile devices). Following these guidelines will also often make web content more usable to users in general.
 WCAG 2.1 success criteria are written as testable statements that are not technology-specific. Guidance about satisfying the success criteria in specific technologies, as well as general information about interpreting the success criteria, is provided in separate documents. See Web Content Accessibility Guidelines (WCAG) Overview for an introduction and links to WCAG technical and educational material.
 WCAG 2.1 extends Web Content Accessibility Guidelines 2.0 [WCAG20], which was published as a W3C Recommendation December 2008. Content that conforms to WCAG 2.1 also conforms to WCAG 2.0. The WG intends that for policies requiring conformance to WCAG 2.0, WCAG 2.1 can provide an alternate means of conformance. The publication of WCAG 2.1 does not deprecate or supersede WCAG 2.0. While WCAG 2.0 remains a W3C Recommendation, the W3C advises the use of WCAG 2.1 to maximize future applicability of accessibility efforts. The W3C also encourages use of the most current version of WCAG when developing or updating web accessibility policies.
 
 Status of This DocumentThis section describes the status of this
 document at the time of its publication. A list of current W3C
 publications and the latest revision of this technical report can be found
 in the
 W3C standards and drafts index at
 https://www.w3.org/TR/.
 This is a Recommendation of WCAG 2.1 by the Accessibility Guidelines Working Group. This incorporates errata and are described in the change log. At some point additional changes might be incorporated into an Edited or Amended Recommendation.
 To comment, file an issue in the W3C WCAG GitHub repository. Although the proposed success criteria in this document reference issues tracking discussion, the Working Group requests that public comments be filed as new issues, one issue per discrete comment. It is free to create a GitHub account to file issues. If filing issues in GitHub is not feasible, send email to public-agwg-comments@w3.org (comment archive). 
 
 This document was published by the Accessibility Guidelines Working Group as
 a Recommendation using the
 Recommendation track. 
 
 W3C recommends the wide deployment of this specification as a standard for
 the Web.
 
 A W3C Recommendation is a specification that, after extensive
 consensus-building, is endorsed by
 W3C and its Members, and
 has commitments from Working Group members to
 royalty-free licensing
 for implementations.
 
 
 
 This document was produced by a group
 operating under the
 W3C Patent
 Policy.
 
 
 W3C maintains a
 public list of any patent disclosures
 made in connection with the deliverables of
 the group; that page also includes
 instructions for disclosing a patent. An individual who has actual
 knowledge of a patent which the individual believes contains
 Essential Claim(s)
 must disclose the information in accordance with
 section 6 of the W3C Patent Policy.
 
 
 This document is governed by the
 03 November 2023 W3C Process Document.
 Table of ContentsAbstractStatus of This DocumentIntroductionBackground on WCAG 2WCAG 2 Layers of GuidanceWCAG 2.1 Supporting DocumentsRequirements for WCAG 2.1Comparison with WCAG 2.0New Features in WCAG 2.1Numbering in WCAG 2.1Conformance to WCAG 2.1Later Versions of Accessibility Guidelines1. Perceivable 1.1 Text Alternatives1.1.1 Non-text Content1.2 Time-based Media1.2.1 Audio-only and Video-only (Prerecorded)1.2.2 Captions (Prerecorded)1.2.3 Audio Description or Media Alternative (Prerecorded)1.2.4 Captions (Live)1.2.5 Audio Description (Prerecorded)1.2.6 Sign Language (Prerecorded)1.2.7 Extended Audio Description (Prerecorded)1.2.8 Media Alternative (Prerecorded)1.2.9 Audio-only (Live)1.3 Adaptable1.3.1 Info and Relationships1.3.2 Meaningful Sequence1.3.3 Sensory Characteristics1.3.4 Orientation1.3.5 Identify Input Purpose1.3.6 Identify Purpose1.4 Distinguishable1.4.1 Use of Color1.4.2 Audio Control1.4.3 Contrast (Minimum)1.4.4 Resize Text1.4.5 Images of Text1.4.6 Contrast (Enhanced)1.4.7 Low or No Background Audio1.4.8 Visual Presentation1.4.9 Images of Text (No Exception)1.4.10 Reflow1.4.11 Non-text Contrast1.4.12 Text Spacing1.4.13 Content on Hover or Focus2. Operable 2.1 Keyboard Accessible2.1.1 Keyboard2.1.2 No Keyboard Trap2.1.3 Keyboard (No Exception)2.1.4 Character Key Shortcuts2.2 Enough Time2.2.1 Timing Adjustable2.2.2 Pause, Stop, Hide2.2.3 No Timing2.2.4 Interruptions2.2.5 Re-authenticating2.2.6 Timeouts2.3 Seizures and Physical Reactions2.3.1 Three Flashes or Below Threshold2.3.2 Three Flashes2.3.3 Animation from Interactions2.4 Navigable2.4.1 Bypass Blocks2.4.2 Page Titled2.4.3 Focus Order2.4.4 Link Purpose (In Context)2.4.5 Multiple Ways2.4.6 Headings and Labels2.4.7 Focus Visible2.4.8 Location2.4.9 Link Purpose (Link Only)2.4.10 Section Headings2.5 Input Modalities2.5.1 Pointer Gestures2.5.2 Pointer Cancellation2.5.3 Label in Name2.5.4 Motion Actuation2.5.5 Target Size2.5.6 Concurrent Input Mechanisms3. Understandable 3.1 Readable3.1.1 Language of Page3.1.2 Language of Parts3.1.3 Unusual Words3.1.4 Abbreviations3.1.5 Reading Level3.1.6 Pronunciation3.2 Predictable3.2.1 On Focus3.2.2 On Input3.2.3 Consistent Navigation3.2.4 Consistent Identification3.2.5 Change on Request3.3 Input Assistance3.3.1 Error Identification3.3.2 Labels or Instructions3.3.3 Error Suggestion3.3.4 Error Prevention (Legal, Financial, Data)3.3.5 Help3.3.6 Error Prevention (All)4. Robust 4.1 Compatible4.1.1 Parsing4.1.2 Name, Role, Value4.1.3 Status Messages5. Conformance5.1 Interpreting Normative Requirements5.2 Conformance Requirements5.2.1 Conformance Level5.2.2 Full pages5.2.3 Complete processes5.2.4 Only Accessibility-Supported Ways of Using Technologies5.2.5 Non-Interference5.3 Conformance Claims (Optional) 5.3.1 Required Components of a Conformance Claim5.3.2 Optional Components of a Conformance Claim 5.4 Statement of Partial Conformance - Third Party Content5.5 Statement of Partial Conformance - Language6. Glossary7. Input Purposes for User Interface ComponentsA. Change LogB. AcknowledgmentsB.1 Participants of the AG WG active in the development of this document:B.2 Other previously active WCAG WG participants and other contributors to WCAG 2.0, WCAG 2.1, or supporting resources B.3 Enabling fundersC. ReferencesC.1 Informative references
 IntroductionThis section is non-normative.
 
 Background on WCAG 2
 
 Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make web content more accessible to people with disabilities. Accessibility involves a wide range of disabilities, including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. Although these guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees, and combinations of disability. These guidelines also make web content more usable by older individuals with changing abilities due to aging and often improve usability for users in general.
 WCAG 2.1 is developed through the W3C process in cooperation with individuals and organizations around the world, with a goal of providing a shared standard for web content accessibility that meets the needs of individuals, organizations, and governments internationally. WCAG 2.1 builds on WCAG 2.0 [WCAG20], which in turn built on WCAG 1.0 [WAI-WEBCONTENT] and is designed to apply broadly to different web technologies now and in the future, and to be testable with a combination of automated testing and human evaluation. For an introduction to WCAG, see the Web Content Accessibility Guidelines (WCAG) Overview.
 
 Significant challenges were encountered in defining additional criteria to address cognitive, language, and learning disabilities, including a short timeline for development as well as challenges in reaching consensus on testability, implementability, and international considerations of proposals. Work will carry on in this area in future versions of WCAG. We encourage authors to refer to our supplemental guidance on improving inclusion for people with disabilities, including learning and cognitive disabilities, people with low-vision, and more.

 Web accessibility depends not only on accessible content but also on accessible web browsers and other user agents. Authoring tools also have an important role in web accessibility. For an overview of how these components of web development and interaction work together, see:
 
 Essential Components of Web Accessibility
 User Agent Accessibility Guidelines (UAAG) Overview
 Authoring Tool Accessibility Guidelines (ATAG) Overview
 
 Where this document refers to WCAG 2 it is intended to mean any and all versions of WCAG that start with 2.
 
 WCAG 2 Layers of Guidance
 
 The individuals and organizations that use WCAG vary widely and include web designers and developers, policy makers, purchasing agents, teachers, and students. In order to meet the varying needs of this audience, several layers of guidance are provided including overall principles, general guidelines, testable success criteria and a rich collection of sufficient techniques, advisory techniques, and documented common failures with examples, resource links and code.
 
 
 Principles - At the top are four principles that provide the foundation for web accessibility: perceivable, operable, understandable, and robust. See also Understanding the Four Principles of Accessibility.
 
 
 Guidelines - Under the principles are guidelines. The 13 guidelines provide the basic goals that authors should work toward in order to make content more accessible to users with different disabilities. The guidelines are not testable, but provide the framework and overall objectives to help authors understand the success criteria and better implement the techniques.
 
 
 Success Criteria - For each guideline, testable success criteria are provided to allow WCAG 2.1 to be used where requirements and conformance testing are necessary such as in design specification, purchasing, regulation, and contractual agreements. In order to meet the needs of different groups and different situations, three levels of conformance are defined: A (lowest), AA, and AAA (highest). Additional information on WCAG levels can be found in Understanding Levels of Conformance.
 
 
 Sufficient and Advisory Techniques - For each of the guidelines and success criteria in the WCAG 2.1 document itself, the working group has also documented a wide variety of techniques. The techniques are informative and fall into two categories: those that are sufficient for meeting the success criteria and those that are advisory. The advisory techniques go beyond what is required by the individual success criteria and allow authors to better address the guidelines. Some advisory techniques address accessibility barriers that are not covered by the testable success criteria. Where common failures are known, these are also documented. See also Sufficient and Advisory Techniques in Understanding WCAG 2.1.
 
 
 All of these layers of guidance (principles, guidelines, success criteria, and sufficient and advisory techniques) work together to provide guidance on how to make content more accessible. Authors are encouraged to view and apply all layers that they are able to, including the advisory techniques, in order to best address the needs of the widest possible range of users.
 Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive language and learning areas. Authors are encouraged to consider the full range of techniques, including the advisory techniques, as well as to seek relevant advice about current best practice to ensure that web content is accessible, as far as possible, to this community. Metadata may assist users in finding content most suitable for their needs. 
 
 WCAG 2.1 Supporting Documents
 
 The WCAG 2.1 document is designed to meet the needs of those who need a stable, referenceable technical standard. Other documents, called supporting documents, are based on the WCAG 2.1 document and address other important purposes, including the ability to be updated to describe how WCAG would be applied with new technologies. Supporting documents include: 
 
 
 How to Meet WCAG 2.1 - A customizable quick reference to WCAG 2.1 that includes all of the guidelines, success criteria, and techniques for authors to use as they are developing and evaluating web content. This includes content from WCAG 2.0 and WCAG 2.1 and can be filtered in many ways to help authors focus on relevant content.
 
 
 Understanding WCAG 2.1 - A guide to understanding and implementing WCAG 2.1. There is a short "Understanding" document for each guideline and success criterion in WCAG 2.1 as well as key topics.
 
 
 Techniques for WCAG 2.1 - A collection of techniques and common failures, each in a separate document that includes a description, examples, code and tests.
 
 
 The WCAG Documents - A diagram and description of how the technical documents are related and linked.
 
 
 See Web Content Accessibility Guidelines (WCAG) Overview for a description of the WCAG 2.1 supporting material, including education resources related to WCAG 2. Additional resources covering topics such as the business case for web accessibility, planning implementation to improve the accessibility of websites, and accessibility policies are listed in WAI Resources.
 
 Requirements for WCAG 2.1
 
 WCAG 2.1 meets a set of requirements for WCAG 2.1 which, in turn, inherit requirements from WCAG 2.0. Requirements structure the overall framework of guidelines and ensure backwards compatibility. The Working Group also used a less formal set of acceptance criteria for success criteria, to help ensure success criteria are similar in style and quality to those in WCAG 2.0. These requirements constrained what could be included in WCAG 2.1. This constraint was important to preserve its nature as a dot-release of WCAG 2.
 
 Comparison with WCAG 2.0
 
 WCAG 2.1 was initiated with the goal to improve accessibility guidance for three major groups: users with cognitive or learning disabilities, users with low vision, and users with disabilities on mobile devices. Many ways to meet these needs were proposed and evaluated, and a set of these were refined by the Working Group. Structural requirements inherited from WCAG 2.0, clarity and impact of proposals, and timeline led to the final set of success criteria included in this version. The Working Group considers that WCAG 2.1 incrementally advances web content accessibility guidance for all these areas, but underscores that not all user needs are met by these guidelines.

 WCAG 2.1 builds on and is backwards compatible with WCAG 2.0, meaning web pages that conform to WCAG 2.1 also conform to WCAG 2.0. Authors that are required by policy to conform with WCAG 2.0 will be able to update content to WCAG 2.1 without losing conformance with WCAG 2.0. Authors following both sets of guidelines should be aware of the following differences:
 New Features in WCAG 2.1
 
 WCAG 2.1 extends WCAG 2.0 by adding new success criteria, definitions to support them, guidelines to organize the additions, and a couple additions to the conformance section. This additive approach helps to make it clear that sites which conform to WCAG 2.1 also conform to WCAG 2.0, thereby meeting conformance obligations that are specific to WCAG 2.0. The Accessibility Guidelines Working Group recommends that sites adopt WCAG 2.1 as their new conformance target, even if formal obligations mention WCAG 2.0, to provide improved accessibility and to anticipate future policy changes.
 The following Success Criteria are new in WCAG 2.1:
 
 1.3.4 Orientation (AA)
 1.3.5 Identify Input Purpose (AA)
 1.3.6 Identify Purpose (AAA)
 1.4.10 Reflow (AA)
 1.4.11 Non-Text Contrast (AA)
 1.4.12 Text Spacing (AA)
 1.4.13 Content on Hover or Focus (AA)
 2.1.4 Character Key Shortcuts (A)
 2.2.6 Timeouts (AAA)
 2.3.3 Animation from Interactions (AAA)
 2.5.1 Pointer Gestures (A)
 2.5.2 Pointer Cancellatio