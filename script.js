{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    // Basic FAQ toggle (optional but nice for small sites)\
    const faqItems = document.querySelectorAll('.faq-item h3');\
\
    faqItems.forEach(item => \{\
        item.addEventListener('click', () => \{\
            const answer = item.nextElementSibling; // This assumes the <p> is directly after the <h3>\
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';\
        \});\
    \});\
\
    // Animate the progress bar (purely visual effect for the parody)\
    const progressBar = document.querySelector('.progress-bar');\
    const targetWidth = parseInt(progressBar.style.width); // Get the initial width from inline style\
\
    // Set initial width to 0 and then animate\
    progressBar.style.width = '0%';\
    setTimeout(() => \{\
        progressBar.style.width = `$\{targetWidth\}%`;\
    \}, 100); // A small delay to ensure the 0% is rendered first\
\
    // You could add more dynamic elements here, like:\
    // - A fake counter that ticks up (use setInterval)\
    // - More elaborate animations\
\});}