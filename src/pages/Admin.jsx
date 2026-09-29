import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import {
  LogOut,
  Plus,
  Trash2,
  Edit3,
  Upload,
  LayoutDashboard,
  Package,
  Image as ImageIcon,
  Users,
  MessageSquare,
  Leaf,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import Seo from "../components/Seo";
const PRODUCT_CATEGORIES = [
  {
    en: "Fertilizers",
    hi: "उर्वरक",
  },
  {
    en: "Insecticides",
    hi: "कीटनाशक",
  },
  {
    en: "Fungicides",
    hi: "फफूंदनाशक",
  },
  {
    en: "Herbicides",
    hi: "शाकनाशी",
  },
  {
    en: "Plant Growth Regulators",
    hi: "पादप वृद्धि नियामक",
  },
  {
    en: "Bio Fertilizers",
    hi: "जैव उर्वरक",
  },
  {
    en: "Micronutrients",
    hi: "सूक्ष्म पोषक तत्व",
  },
  {
    en: "Organic Products",
    hi: "जैविक उत्पाद",
  },
];
const emptyProduct = {
  name_en: "",
  name_hi: "",
  category_en: "Fertilizers",
  category_hi: "उर्वरक",
  short_description_en: "",
  short_description_hi: "",
  description_en: "",
  description_hi: "",
  image_url: "",
  featured: false,
  published: true,
};
const emptyGallery = {
  title_en: "",
  title_hi: "",
  image_url: "",
  sort_order: 0,
  published: true,
};
const emptyTeam = {
  name: "",
  role_en: "",
  role_hi: "",
  bio_en: "",
  bio_hi: "",
  phone: "",
  email: "",
  image_url: "",
  sort_order: 0,
  published: true,
};
function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (!supabase) return;
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else nav("/admin/dashboard");
    setLoading(false);
  };
  return (
    <>
      <Seo
        title="Admin Login"
        description="Natariya Chemicals content management login."
        path="/admin"
      />
      <div className="min-h-screen bg-brand-950 px-5 py-12 text-white">
        <div className="mx-auto max-w-md">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to website
          </Link>
          <form
            onSubmit={submit}
            className="rounded-3xl border border-white/10 bg-white p-7 text-slate-900 shadow-2xl sm:p-9"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
              <Leaf />
            </div>
            <h1 className="mt-6 text-3xl font-black">{t("admin.login")}</h1>
            <p className="mt-2 text-sm text-slate-500">
              Natariya Chemicals Industries Pvt. Ltd.
            </p>
            {error && (
              <div className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}
            <label className="mt-6 block text-sm font-bold">
              {t("admin.email")}
              <input
                className="admin-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="mt-4 block text-sm font-bold">
              {t("admin.password")}
              <input
                className="admin-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button disabled={loading} className="btn-primary mt-6 w-full">
              {loading ? <Loader2 className="animate-spin" /> : null}
              {loading ? "Signing in..." : t("admin.signIn")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
function AdminLayout({ children }) {
  const { t } = useTranslation();
  const nav = useNavigate();
  const [checking, setChecking] = useState(true);
  const location = useLocation();
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) nav("/admin");
      else setChecking(false);
    });
  }, [nav]);
  if (checking)
    return (
      <div className="grid min-h-screen place-items-center bg-slate-50">
        <Loader2 className="animate-spin text-brand-700" />
      </div>
    );
  const logout = async () => {
    await supabase.auth.signOut();
    nav("/admin");
  };
  const links = [
    ["/admin/dashboard", LayoutDashboard, t("admin.dashboard")],
    ["/admin/products", Package, t("admin.products")],
    ["/admin/gallery", ImageIcon, t("admin.gallery")],
    ["/admin/team", Users, t("admin.team")],
  ];
  return (
    <>
      <Seo
        title="Admin Panel"
        description="Natariya Chemicals content management system."
        path={location.pathname}
      />
      <div className="min-h-screen bg-slate-100 lg:flex">
        <aside className="w-full border-b border-slate-200 bg-brand-950 text-white lg:fixed lg:inset-y-0 lg:w-64 lg:border-0">
          <div className="flex h-16 items-center justify-between px-5">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-2 font-black"
            >
              <Leaf className="text-brand-300" />
              Natariya CMS
            </Link>
            <button
              className="rounded-lg bg-white/10 p-2 lg:hidden"
              onClick={logout}
            >
              <LogOut size={16} />
            </button>
          </div>
          <nav className="hidden gap-1 px-3 pb-5 lg:grid">
            {links.map(([to, I, label]) => (
              <Link
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${location.pathname === to ? "bg-white text-brand-900" : "text-white/65 hover:bg-white/10 hover:text-white"}`}
                key={to}
                to={to}
              >
                <I size={18} />
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="w-full lg:ml-64">
          <div className="hidden h-16 items-center justify-between border-b border-slate-200 bg-white px-8 lg:flex">
            <Link
              to="/"
              className="text-sm font-semibold text-slate-500 hover:text-brand-700"
            >
              <ArrowLeft size={15} className="mr-1 inline" />
              Website
            </Link>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-red-600"
            >
              <LogOut size={16} />
              {t("admin.signOut")}
            </button>
          </div>
          <div className="p-5 sm:p-8">{children}</div>
        </div>
      </div>
    </>
  );
}
async function uploadImage(file, folder) {
  if (!file) return "";
  const ext = file.name.split(".").pop();
  const path = `${folder}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from("website-media")
    .upload(path, file, { upsert: false, contentType: file.type });
  if (error) throw error;
  return supabase.storage.from("website-media").getPublicUrl(path).data
    .publicUrl;
}
function Manager({ type }) {
  const { t } = useTranslation();
  const config = {
    products: {
      table: "products",
      title: t("admin.products"),
      empty: emptyProduct,
      fields: [
        "name_en",
        "name_hi",
        "category_en",
        "category_hi",
        "short_description_en",
        "short_description_hi",
        "description_en",
        "description_hi",
        "image_url",
        "featured",
        "published",
      ],
      imageFolder: "products",
    },
    gallery: {
      table: "gallery",
      title: t("admin.gallery"),
      empty: emptyGallery,
      fields: ["title_en", "title_hi", "image_url", "sort_order", "published"],
      imageFolder: "gallery",
    },
    team: {
      table: "team_members",
      title: t("admin.team"),
      empty: emptyTeam,
      fields: [
        "name",
        "role_en",
        "role_hi",
        "bio_en",
        "bio_hi",
        "phone",
        "email",
        "image_url",
        "sort_order",
        "published",
      ],
      imageFolder: "team",
    },
  }[type];
  const [rows, setRows] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ ...config.empty });
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const load = async () => {
    const { data, error } = await supabase
      .from(config.table)
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setRows(data || []);
  };
  useEffect(() => {
    load();
  }, [type]);
  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      let payload = { ...form };
      if (file) payload.image_url = await uploadImage(file, config.imageFolder);
      const result = editing
        ? await supabase.from(config.table).update(payload).eq("id", editing)
        : await supabase.from(config.table).insert(payload);
      if (result.error) throw result.error;
      setEditing(null);
      setForm({ ...config.empty });
      setFile(null);
      await load();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };
  const edit = (row) => {
    setEditing(row.id);
    setForm({ ...row });
    setFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const del = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    const { error } = await supabase.from(config.table).delete().eq("id", id);
    if (error) setError(error.message);
    else load();
  };
  const set = (k, v) => setForm((x) => ({ ...x, [k]: v }));
  const textFields = config.fields.filter(
    (k) =>
      ![
        "image_url",
        "featured",
        "published",
        "sort_order",
        "description_en",
        "description_hi",
        "bio_en",
        "bio_hi",
      ].includes(k),
  );
  return (
    <section className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">Content Management</span>
          <h1 className="text-3xl font-black text-slate-900">{config.title}</h1>
        </div>
        <button
          className="btn-primary"
          onClick={() => {
            setEditing(null);
            setForm({ ...config.empty });
            setFile(null);
          }}
        >
          <Plus size={17} />
          {t("admin.add")}
        </button>
      </div>
      {error && (
        <div className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
      <form
        onSubmit={save}
        className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
      >
        <h2 className="text-xl font-black">
          {editing ? t("admin.edit") : t("admin.add")} {config.title}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {textFields.map((k) => {
  const isCategoryEn = k === "category_en";
  const isCategoryHi = k === "category_hi";

  return (
    <label key={k} className="text-sm font-bold">
      {k}

      {isCategoryEn || isCategoryHi ? (
        <select
          className="admin-input"
          value={form[k] ?? ""}
          onChange={(e) => {
            const value = e.target.value;

            if (isCategoryEn) {
              const selected = PRODUCT_CATEGORIES.find(
                (item) => item.en === value
              );

              set("category_en", value);
              set("category_hi", selected?.hi || "");
            } else {
              const selected = PRODUCT_CATEGORIES.find(
                (item) => item.hi === value
              );

              set("category_hi", value);
              set("category_en", selected?.en || "");
            }
          }}
          required
        >
          <option value="">Select Category</option>

          {PRODUCT_CATEGORIES.map((item) => (
            <option
              key={isCategoryEn ? item.en : item.hi}
              value={isCategoryEn ? item.en : item.hi}
            >
              {isCategoryEn ? item.en : item.hi}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="admin-input"
          value={form[k] ?? ""}
          onChange={(e) => set(k, e.target.value)}
          required={/name_en|name_hi|title_en|title_hi|role_en|role_hi/.test(
            k
          )}
        />
      )}
    </label>
  );
})}
          {["description_en", "description_hi", "bio_en", "bio_hi"]
            .filter((k) => config.fields.includes(k))
            .map((k) => (
              <label key={k} className="text-sm font-bold md:col-span-2">
                {k}
                <textarea
                  className="admin-input min-h-28"
                  value={form[k] ?? ""}
                  onChange={(e) => set(k, e.target.value)}
                />
              </label>
            ))}
          {config.fields.includes("image_url") && (
            <label className="text-sm font-bold md:col-span-2">
              {t("admin.upload")}
              <input
                className="admin-input"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              {form.image_url && (
                <img
                  className="mt-3 h-36 w-56 rounded-xl object-cover"
                  src={form.image_url}
                  alt="Preview"
                />
              )}
            </label>
          )}
          {config.fields.includes("sort_order") && (
            <label className="text-sm font-bold">
              sort_order
              <input
                className="admin-input"
                type="number"
                value={form.sort_order ?? 0}
                onChange={(e) => set("sort_order", Number(e.target.value))}
              />
            </label>
          )}
          {config.fields.includes("featured") && (
            <label className="flex items-center gap-2 text-sm font-bold">
              <input
                type="checkbox"
                checked={!!form.featured}
                onChange={(e) => set("featured", e.target.checked)}
              />
              {t("admin.featured")}
            </label>
          )}
          {config.fields.includes("published") && (
            <label className="flex items-center gap-2 text-sm font-bold">
              <input
                type="checkbox"
                checked={!!form.published}
                onChange={(e) => set("published", e.target.checked)}
              />
              {t("admin.published")}
            </label>
          )}
        </div>
        <div className="mt-6 flex gap-3">
          <button disabled={saving} className="btn-primary">
            {saving ? <Loader2 className="animate-spin" /> : null}
            {saving ? "Saving..." : t("admin.save")}
          </button>
          {editing && (
            <button
              type="button"
              className="btn-outline"
              onClick={() => {
                setEditing(null);
                setForm({ ...config.empty });
              }}
            >
              {t("admin.cancel")}
            </button>
          )}
        </div>
      </form>
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-4">Image</th>
                <th className="px-5 py-4">Name / Title</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="px-5 py-4">
                    {r.image_url ? (
                      <img
                        className="h-14 w-20 rounded-lg object-cover"
                        src={r.image_url}
                        alt=""
                      />
                    ) : (
                      "—"
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <strong className="block">
                      {r.name_en || r.title_en || r.name}
                    </strong>
                    <span className="text-xs text-slate-500">
                      {r.name_hi || r.title_hi || r.role_en}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${r.published ? "bg-brand-50 text-brand-700" : "bg-slate-100 text-slate-500"}`}
                    >
                      {r.published ? "Published" : "Hidden"}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => edit(r)}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 hover:border-brand-300 hover:text-brand-700"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button
                        onClick={() => del(r.id)}
                        className="grid h-9 w-9 place-items-center rounded-lg border border-red-100 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!rows.length && (
            <div className="p-10 text-center text-sm text-slate-500">
              {t("admin.noData")}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function Dashboard() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-7xl">
      <span className="eyebrow">Natariya CMS</span>
      <h1 className="text-3xl font-black text-slate-900">
        {t("admin.dashboard")}
      </h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          [
            "/admin/products",
            Package,
            t("admin.products"),
            "Add, edit and publish products",
          ],
          [
            "/admin/gallery",
            ImageIcon,
            t("admin.gallery"),
            "Upload website gallery images",
          ],
          [
            "/admin/team",
            Users,
            t("admin.team"),
            "Manage team profiles and photos",
          ],
        ].map(([to, I, title, text]) => (
          <Link
            key={to}
            to={to}
            className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-200"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
              <I />
            </div>
            <strong className="mt-5 block text-xl font-black">{title}</strong>
            <span className="mt-2 block text-sm leading-6 text-slate-500">
              {text}
            </span>
          </Link>
        ))}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-slate-700">
            <MessageSquare />
          </div>
          <strong className="mt-5 block text-xl font-black">
            Contact Messages
          </strong>
          <span className="mt-2 block text-sm leading-6 text-slate-500">
            Stored in Supabase contact_messages table.
          </span>
        </div>
      </div>
    </section>
  );
}
export default function Admin() {
  if (!isSupabaseConfigured) return <Login />;
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        path="dashboard"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />
      <Route
        path="products"
        element={
          <AdminLayout>
            <Manager type="products" />
          </AdminLayout>
        }
      />
      <Route
        path="gallery"
        element={
          <AdminLayout>
            <Manager type="gallery" />
          </AdminLayout>
        }
      />
      <Route
        path="team"
        element={
          <AdminLayout>
            <Manager type="team" />
          </AdminLayout>
        }
      />
    </Routes>
  );
}
