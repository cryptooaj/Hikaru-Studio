# Responsive UI test — 2026-10-27

Target: the deployed `https://studiohikaru.com/` page before this change. Testing used a live remote Chromium browser, with screenshots inspected at 320, 390, 768, 1024 and 1440px widths. DOM layout measurements also covered 360 and 430px. The browser fetched page media for rendering; no repository media files were downloaded or changed.

| Flow | Evidence from the live page | Result and change |
| --- | --- | --- |
| Hero | At 320 and 390px, copy and actions were readable. At 768px, the camera covered the copy; at 1024px, the oversized heading was clipped. At 1440px, the side-by-side layout fit. | Stack the layout through tablet widths and reserve the 128px heading for `xl` screens. |
| Portfolio | At 390px, all five filters showed the correct project counts: 7, 9, 6, 4 and 7. The product modal opened, locked background scrolling and showed its close control. The category row displayed an unwanted scrollbar. | Add the missing `scrollbar-hide` utility. |
| About | Before its cards animated into view, the 390px viewport had a 408px document width. The cards' initial `translateX(50px)` caused the 18px overflow. Replacing that transform with a vertical offset in the browser reduced document width to 389px. The portrait occupied 600px of mobile height. | Animate cards vertically and shorten the portrait on narrow screens. |
| Services | At 390px, all four existing cards and their descriptions were readable. | Remove the Mobile content service at the owner's request and use three columns on wide screens. |
| Contact | At 390px in both themes, contact links and fields fit. Empty required fields were invalid; clicking Send focused the name field without submitting. The back-to-top control covered the footer copyright near the bottom. | Hide the control near the page bottom. No message was sent. |
| Mobile navigation | At 390px, the menu opened and Escape closed it, returning focus to Open menu. | Passed. |

The changed version still needs a post-deployment screenshot check at these widths. This pass did not test other browsers, actual Android hardware, EmailJS delivery or every media file. No form was submitted.
