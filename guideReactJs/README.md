### DOM vs Virtual DOM
<p><i>DOM</i>, Web sayfalarının bize görünmesini sağlayan html elemanlarının belirli bir düzenle bir arada bulunmasıdır.
<i>Virtual DOM</i> ise React tarafından render edilen DOM'un bir kopyasının tutulmuş halidir. Klasik DOM şu şekilde davranır: Sayfada bir değişiklik olduğunda DOM bütün html'i tarar ve ilgili yerdeki değişimi gerçekleştirir. Ancak bu değişim talebi bir öneki taleple aynı olsa bile yeniden gerçekleştirir. Peki bunun sonu var mı ? Performansı nasıl etkiler?(tabi ki olumsuz) React ise DOM-VDOM arasında kıyaslama yapar ve sadece değişiklik olan alanda güncelleme yapar. Ve bu değişim talebi önceki durum ile aynı değilse güncellemeyi yapmaz. </p>

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

### StateFull and Stateless Components
<p>
They are known also as: Container vs Presentational Components, smart vs Dumb Components
StateFull component, veri değişimini kontrol eden-takip eden component'tir.
Stateless component, prop'lar ile iletilen ya da render edilen veriyi gösterir.

- Notice the stateless component is written as a function component. (Bu yüzden mümkün oldukça basit ve <b>stateless</b> yazmaya çalışmalısın.)
- (?) Bir bileşeni yazmaya başladığımızda muhtemelen o bileşenin aslında ne olacağına, nasıl sonuçlanacağından emin olamayız (Statefull or stateless)
- Bir kullanıcının şu anki favroi şarkıları veya en yüksek puanları gibi bilgiler dinamik verilerdir. Bu durumda bir ara bileşenin veriyi tutumasını ve alt bileşenlere dağıtmasını hedefleyin. Bu durum olası bir hata durumunda her alt bileşeni kontrol etmek yerine sadece parent component'i kontrol etmeye olanak sağlar. Böylece Child bileşenin endişe etmesi gereken tek şey veriyi göstermek olur.



* Understanding the Base Features & Syntax
* Working with Lists and Conditionals
* Styling React Components & Elements (Eğer v2 de çalışılıyorsa proje ject edildiğinde css dosyaları file.module.css şeklinde kaydedilirse webpack.config.js dosyasında değişim yapmadan çalışılmaya devam edilebilir.)
* Diving Deeper into Components & React Internals
</p>