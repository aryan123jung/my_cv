from pathlib import Path

from PIL import Image as PILImage
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "exports"
OUT_DIR.mkdir(exist_ok=True)
PDF_OUT = OUT_DIR / "Aryan_Jung_Chhetri_CV.pdf"
PHOTO = ROOT / "public" / "IMG_1907.jpg"
CROPPED_PHOTO = OUT_DIR / "aryan_cv_photo_square.jpg"

ACCENT = colors.HexColor("#2E74B5")
DARK = colors.HexColor("#121F2E")
MUTED = colors.HexColor("#58626E")
LIGHT = colors.HexColor("#E8EEF5")
PALE = colors.HexColor("#F4F7FB")
BORDER = colors.HexColor("#D7DEE8")


def crop_photo():
    if not PHOTO.exists():
        return None
    img = PILImage.open(PHOTO).convert("RGB")
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = max(0, int((h - side) * 0.25))
    crop = img.crop((left, top, left + side, top + side))
    crop.save(CROPPED_PHOTO, quality=92)
    return CROPPED_PHOTO


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        fontName="Helvetica-Bold",
        fontSize=25,
        leading=26,
        textColor=DARK,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=ACCENT,
        spaceAfter=5,
    )
)
styles.add(
    ParagraphStyle(
        name="BodyCV",
        fontName="Helvetica",
        fontSize=9.4,
        leading=11.7,
        textColor=DARK,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="SmallMuted",
        fontName="Helvetica",
        fontSize=8.8,
        leading=11,
        textColor=MUTED,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        fontName="Helvetica-Bold",
        fontSize=9.6,
        leading=11.5,
        textColor=ACCENT,
        spaceBefore=7,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="Chip",
        fontName="Helvetica-Bold",
        fontSize=8.4,
        leading=10,
        textColor=DARK,
        alignment=TA_CENTER,
    )
)
styles.add(
    ParagraphStyle(
        name="Footer",
        fontName="Helvetica",
        fontSize=7.8,
        leading=9,
        textColor=MUTED,
        alignment=TA_CENTER,
    )
)


def section(title):
    return KeepTogether(
        [
            Spacer(1, 3),
            Paragraph(title.upper(), styles["Section"]),
            Table([[""]], colWidths=[7.1 * inch], rowHeights=[0.5], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), BORDER)])),
            Spacer(1, 2),
        ]
    )


def bullets(items):
    return ListFlowable(
        [
            ListItem(Paragraph(item, styles["BodyCV"]), leftIndent=10, bulletColor=ACCENT)
            for item in items
        ],
        bulletType="bullet",
        start="circle",
        leftIndent=13,
        bulletFontSize=5.5,
        bulletOffsetY=1.5,
    )


def chip_table(items, cols=4):
    rows = []
    for i in range(0, len(items), cols):
        row = [Paragraph(x, styles["Chip"]) for x in items[i : i + cols]]
        row += [""] * (cols - len(row))
        rows.append(row)
    table = Table(rows, colWidths=[7.1 * inch / cols] * cols, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.4, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#E2E8F0")),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ]
        )
    )
    return table


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7.8)
    canvas.setFillColor(MUTED)
    canvas.drawCentredString(letter[0] / 2, 0.32 * inch, f"Aryan Jung Chhetri | Curriculum Vitae | Page {doc.page}")
    canvas.restoreState()


photo_path = crop_photo()
doc = SimpleDocTemplate(
    str(PDF_OUT),
    pagesize=letter,
    rightMargin=0.55 * inch,
    leftMargin=0.55 * inch,
    topMargin=0.45 * inch,
    bottomMargin=0.5 * inch,
)

story = []
header_left = [
    Paragraph("ARYAN JUNG CHHETRI", styles["Name"]),
    Paragraph("Fullstack Developer | Mobile App Developer | UI/UX Enthusiast | Computing Student", styles["Role"]),
    Paragraph("Dhobighat, Lalitpur | chhetriaryanjung@gmail.com | 9840530090", styles["SmallMuted"]),
    Paragraph(
        '<link href="https://github.com/aryan123jung" color="#2E74B5">GitHub</link>'
        ' | <link href="https://www.linkedin.com/in/aryan-jung-chhetri-b67049363/" color="#2E74B5">LinkedIn</link>',
        styles["SmallMuted"],
    ),
]
header_right = ""
if photo_path:
    header_right = Image(str(photo_path), width=0.95 * inch, height=0.95 * inch)
header = Table([[header_left, header_right]], colWidths=[6.0 * inch, 1.1 * inch])
header.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("ALIGN", (1, 0), (1, 0), "RIGHT"),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ("LINEBELOW", (0, 0), (-1, -1), 0.6, BORDER),
        ]
    )
)
story.append(header)

story.append(section("Professional Profile"))
story.append(
    Paragraph(
        "BSc (Hons) Computing student with a practical blend of fullstack development, mobile app development, UI/UX design, cybersecurity learning, and data science and analytics. Builds clean, accessible, recruiter-ready digital experiences with strong attention to visual hierarchy, usability, and secure web fundamentals.",
        styles["BodyCV"],
    )
)

story.append(section("Technical Skills"))
story.append(
    chip_table(
        [
            "React",
            "JavaScript",
            "Flutter",
            "Figma",
            "Burp Suite",
            "Python",
            "Java",
            "HTML",
            "CSS",
            "UI/UX Design",
            "Data Analytics",
            "Web Security",
        ],
        cols=4,
    )
)

story.append(section("Education"))
story.append(Paragraph("<b>Softwarica College of IT and E-Commerce:</b> BSc (Hons) Computing", styles["BodyCV"]))
story.append(Paragraph("<b>+2 Nightingale College:</b> Management with Maths and Computer", styles["BodyCV"]))

story.append(section("Projects"))
story.append(
    bullets(
        [
            "<b>ChautariKuraKani:</b> Full social media application for web and mobile where users connect and join Chautari communities inspired by Nepali conversation culture. Tech: TypeScript, Flutter, NodeJS.",
            "<b>TeamSphere:</b> Team management platform for coaches to analyze player performance and support structured decisions. Tech: React, Fullstack, Tailwind.",
            "<b>Caption:</b> Mobile application for multi-language translation and scan-based translation workflows. Tech: Kotlin, Java.",
            "<b>GuffGuthi:</b> Reddit-like communication app inspired by Nepali Guthi culture, focused on community discussion and user interaction. Tech: React, JavaScript.",
            "<b>Data Science Data Analytics:</b> Analytics project for a UK county dataset, focused on insight generation and informed decision-making. Tech: R, R-Studio, Excel.",
            "<b>ML/AI Player Recommendation System:</b> ML/AI project for IPL franchises to support squad building and identify domestic players with growth potential. Tech: Python, Excel.",
        ]
    )
)

story.append(section("Academic & Personal Experience"))
story.append(
    bullets(
        [
            "<b>Personal Web Application Development:</b> Built fullstack interfaces and practiced component-driven development with modern JavaScript workflows.",
            "<b>Personal Mobile Application Development:</b> Built functional mobile interfaces using modern Flutter and Riverpod workflows.",
            "<b>UI/UX Design Practice:</b> Created clean user flows, wireframes, and interface concepts with focus on usability and visual hierarchy.",
            "<b>Academic Team Collaborations:</b> Worked with classmates on computing assignments, shared responsibilities, and presented technical outcomes.",
            "<b>Cybersecurity Learning:</b> Explored web application security fundamentals, HTTP behavior, and testing workflows using Burp Suite.",
        ]
    )
)

story.append(section("Leadership & Soft Skills"))
story.append(
    bullets(
        [
            "<b>U19 District Cricket Captain:</b> Demonstrated leadership, teamwork, discipline, communication, and decision-making under pressure.",
        ]
    )
)
story.append(
    Paragraph(
        "<b>Soft skills:</b> Leadership, Team Collaboration, Communication, Problem Solving, Adaptability, Strategic Thinking",
        styles["BodyCV"],
    )
)

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(PDF_OUT)
