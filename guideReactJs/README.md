### Props
<p>Props, en basit anlatımla bir componentten başka bir componente veri akışını sağlamak için kullandığımız anahtar kelimedir. Props'lar readonly'dir. Eğer bir functional component üzerinden erişiyorsak {props} class component üzerinden erişiyorsak {this.props} şeklinde olmalıdır.</p>
### State
<p>State, bir componentle ilgili dataları taşıyan javascript objesidir.
<ul>
<li>Sadece class component ile kullanılabilir.
- Teknik olarak functional componentlerde de ‘hooks’ olarak kullanılabilir.</li>
<li>State’de bir değişiklik yapmak istediğimizde render() metodu çalışır ve component render edilir. </li>
</ul>
<b>*</b> Bir component oluşturulduğunda state başlatılmalıdır ve state’ler sadece ve sadece ‘<b>setState()</b>‘ fonksiyonu ile güncellebilir.</p>

* Understanding the Base Features & Syntax
* Working with Lists and Conditionals
* Styling React Components & Elements (Eğer v2 de çalışılıyorsa proje ject edildiğinde css dosyaları file.module.css şeklinde kaydedilirse webpack.config.js dosyasında değişim yapmadan çalışılmaya devam edilebilir.)