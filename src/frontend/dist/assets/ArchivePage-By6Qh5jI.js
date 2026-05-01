import { f as useParams, h as getProjectById, k as getDocuments, r as reactExports, j as jsxRuntimeExports, L as Link, l as FileText } from "./index-D0P90mBY.js";
import { B as Badge } from "./badge-CZY1RXcR.js";
import { B as Button } from "./button-B8NTql6j.js";
import { A as ArrowLeft } from "./arrow-left-xbFge28E.js";
import { F as Folder } from "./folder-Bwq3q-WF.js";
import "./index-Gc6HE7gQ.js";
const FOLDERS = [
  {
    key: "Study",
    label: "الدراسات",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500"
  },
  {
    key: "Contract",
    label: "العقود",
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500"
  },
  {
    key: "Execution",
    label: "التنفيذ",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-500"
  },
  {
    key: "Correspondence",
    label: "المراسلات",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500"
  }
];
function ArchivePage() {
  const { id } = useParams({ from: "/projects/$id/archive" });
  const projectId = Number(id);
  const project = getProjectById(projectId);
  const allDocuments = getDocuments(projectId);
  const [selectedFolder, setSelectedFolder] = reactExports.useState("Study");
  const activeFolderDef = FOLDERS.find((f) => f.key === selectedFolder);
  const filteredDocs = allDocuments.filter(
    (doc) => doc.folder === selectedFolder
  );
  function docCountFor(folder) {
    return allDocuments.filter((d) => d.folder === folder).length;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold text-foreground", children: [
          "أرشيف المشروع",
          project && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground text-base mr-2", children: [
            "— ",
            project.name
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "إدارة وثائق ومستندات المشروع" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$id", params: { id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "gap-2",
          "data-ocid": "archive.back_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 15 }),
            "العودة للمشروع"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-72 flex-shrink-0 flex flex-col gap-3",
          "data-ocid": "archive.folders.panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground px-1", children: "المجلدات" }),
            FOLDERS.map((folder, index) => {
              const isSelected = selectedFolder === folder.key;
              const count = docCountFor(folder.key);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedFolder(folder.key),
                  "data-ocid": `archive.folder.item.${index + 1}`,
                  className: [
                    "flex items-center gap-3 px-4 py-4 rounded-xl border-2 text-right w-full transition-smooth",
                    isSelected ? `${folder.bgColor} ${folder.borderColor} shadow-sm` : "bg-card border-border hover:border-border hover:bg-muted/30"
                  ].join(" "),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: [
                          "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                          isSelected ? folder.bgColor : "bg-muted"
                        ].join(" "),
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Folder,
                          {
                            size: 20,
                            className: isSelected ? folder.iconColor : "text-muted-foreground",
                            fill: isSelected ? "currentColor" : "none",
                            fillOpacity: isSelected ? 0.2 : 0
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: [
                            "text-sm font-semibold truncate",
                            isSelected ? folder.color : "text-foreground"
                          ].join(" "),
                          children: folder.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                        count,
                        " ",
                        count === 1 ? "وثيقة" : "وثائق"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: isSelected ? "default" : "secondary",
                        className: "flex-shrink-0 text-xs min-w-[24px] justify-center",
                        "data-ocid": `archive.folder.badge.${index + 1}`,
                        children: count
                      }
                    )
                  ]
                },
                folder.key
              );
            })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-foreground", children: [
            "وثائق",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: activeFolderDef.color, children: activeFolderDef.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            filteredDocs.length,
            " نتيجة"
          ] })
        ] }),
        filteredDocs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center justify-center py-16 bg-card rounded-xl border border-border",
            "data-ocid": "archive.documents.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 24, className: "text-muted-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "لا توجد وثائق في هذا المجلد" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "لم يتم رفع أي وثائق بعد" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-col gap-2",
            "data-ocid": "archive.documents.list",
            children: filteredDocs.map((doc, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 px-5 py-4 bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-smooth group",
                "data-ocid": `archive.document.item.${index + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 20, className: "text-destructive" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: doc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        "رقم الوثيقة:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: doc.docNumber })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/40 text-xs", children: "|" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: new Date(doc.date).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: doc.fileUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": `archive.document.view_button.${index + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          className: "text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth flex-shrink-0",
                          children: "عرض"
                        }
                      )
                    }
                  )
                ]
              },
              doc.id
            ))
          }
        )
      ] })
    ] })
  ] });
}
export {
  ArchivePage as default
};
