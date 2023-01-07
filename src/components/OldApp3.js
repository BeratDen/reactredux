import { useEffect, useMemo, useState } from "react";

function App() {
  // const genders = ["Erkek", "Kadın"]; // array
  const genders = [
    { key: "1", value: "Erkek" },
    { key: "2", value: "Kadın" },
  ];

  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "JavaScript" },
    { key: 3, value: "CSS" },
    { key: 4, value: "HTML" },
  ];

  const levels = [
    { key: "beginner", value: "Başlangıç" },
    { key: "jr_developer", value: "Jr. Developer" },
    { key: "sr_developer", value: "Sr. Developer" },
  ];

  const [name, setName] = useState("berat");
  const [description, setDescription] = useState();
  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    { key: 1, value: "1. Kuralı Kabul Ediyorum.", checked: false },
    { key: 2, value: "2. Kuralı Kabul Ediyorum.", checked: false },
    { key: 3, value: "3. Kuralı Kabul Ediyorum.", checked: true },
  ]);
  const [level, setLevel] = useState("jr_developer");
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", function () {
        setImage(this.result);
      });
      fileReader.readAsDataURL(avatar);
    }
  }, [avatar]);

  const selectedLevel = levels.find((l) => l.key === level);
  const selectedGender = genders.find((g) => g.key === gender);
  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));
  const enabled = rules.every((rule) => rule.checked) && avatar;

  //useMemo
  // const selectedGender = useMemo(() => {
  //   return genders[gender];
  // }, [gender]);

  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };

  const submitHandle = (e) => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("ahmet")}>Adı Değiştir</button>
      <br />
      {name}

      <br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      {description}
      <br />
      <select
        name=""
        id=""
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Seçiniz</option>
        {genders.map((gender) => (
          <option key={gender.key} value={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <br />
      {JSON.stringify(selectedGender)}
      <br />
      <select
        name=""
        id=""
        value={categories}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
        multiple={true}
      >
        {categoryList.map((category) => (
          <option key={category.key} value={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <button onClick={() => setCategories([2, 3, 4])}>Kategori Seç</button>
      <br />
      <pre>{JSON.stringify(selectedCategories)}</pre>

      <br />
      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kuralları Kabul Ediyorum
      </label>

      <br />

      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}

      <br />
      <pre>{JSON.stringify(rules, null, 2)}</pre>

      <br />

      {levels.map((l, index) => (
        <label key={index}>
          <input
            type="radio"
            value={l.key}
            checked={l.key === level}
            onChange={(e) => setLevel(e.target.value)}
          />
          {l.value}
        </label>
      ))}
      <br />
      {JSON.stringify(selectedLevel)}

      <br />

      <label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>

      <br />
      {avatar && (
        <>
          <h3>{avatar.name}</h3>
          {image && <img src={image} alt="" />}
        </>
      )}

      <br />
      <button onClick={submitHandle} disabled={!enabled}>
        Devam Et
      </button>
    </>
  );
}

export default App;
