### DOM vs Virtual DOM

<p><i>DOM</i>, Web sayfalarının bize görünmesini sağlayan html elemanlarının belirli bir düzenle bir arada bulunmasıdır.
<i>Virtual DOM</i> ise React tarafından render edilen DOM'un bir kopyasının tutulmuş halidir. Klasik DOM şu şekilde davranır: Sayfada bir değişiklik olduğunda DOM bütün html'i tarar ve ilgili yerdeki değişimi gerçekleştirir. Ancak bu değişim talebi bir öneki taleple aynı olsa bile yeniden gerçekleştirir. Peki bunun sonu var mı ? Performansı nasıl etkiler?(tabi ki olumsuz) React ise DOM-VDOM arasında kıyaslama yapar ve sadece değişiklik olan alanda güncelleme yapar. Ve bu değişim talebi önceki durum ile aynı değilse güncellemeyi yapmaz. </p>

### Props

<p>Props, en basit anlatımla bir componentten başka bir componente veri akışını sağlamak için kullandığımız anahtar kelimedir. Props'lar readonly'dir. Eğer bir functional component üzerinden erişiyorsak {props} class component üzerinden erişiyorsak {this.props} şeklinde olmalıdır.

- Props'lar sabit veriler oldukları için yalnızca sayfanın ilk yüklenişinde render edilirler.

</p>

### State

<p>State, bir componentle ilgili dataları taşıyan javascript objesidir.
<ul>
<li>Sadece class component ile kullanılabilir.
- Teknik olarak functional componentlerde de ‘hooks’ olarak kullanılabilir.</li>
<li>State’de bir değişiklik yapmak istediğimizde render() metodu çalışır ve component render edilir. </li>
</ul>
<b>*</b> Bir component oluşturulduğunda state başlatılmalıdır ve state’ler sadece ve sadece ‘<b>setState()</b>‘ fonksiyonu ile güncellebilir.</p>

### StateFull and Stateless Components

<p> Bir component statefull tanımlandığında React bu component'i diff algoritmasına dahile der.
They are known also as: Container vs Presentational Components, smart vs Dumb Components
StateFull component, veri değişimini kontrol eden-takip eden component'tir.
Stateless component, prop'lar ile iletilen ya da render edilen veriyi gösterir.

- Notice the stateless component is written as a function component. (Bu yüzden mümkün oldukça basit ve <b>stateless</b> yazmaya çalışmalısın.)
- (?) Bir bileşeni yazmaya başladığımızda muhtemelen o bileşenin aslında ne olacağına, nasıl sonuçlanacağından emin olamayız (Statefull or stateless)
- Bir kullanıcının şu anki favroi şarkıları veya en yüksek puanları gibi bilgiler dinamik verilerdir. Bu durumda bir ara bileşenin veriyi tutumasını ve alt bileşenlere dağıtmasını hedefleyin. Bu durum olası bir hata durumunda her alt bileşeni kontrol etmek yerine sadece parent component'i kontrol etmeye olanak sağlar. Böylece Child bileşenin endişe etmesi gereken tek şey veriyi göstermek olur.
- Bazen child bileşenin zorunlu olmadığında durumu(state) yönetmesi çok daha uygun olur. Örneğin input child bileşen, sadece type kontrolü sağlıyor.
- Parent'in olabildiğince fazla bileşen tutmasını ve state'leri prop'lar aracılığıyla component'lere aktarmalısın.
- Since ReactJs 16.8 statefull is not automatically a class based component and functinonal component couldnt manage state. Functional component can manage state with usestate hook but the majority of your components should be presentational stateless components so functional components that dont manage state. so having a lot of dumb components is a good idea.

<table>
<thead>
<th>Class Based Components</th>
<th>Functional Components</th></thead>
<tbody>
<tr>
<td>extends to component</td>
<td>const XY = props=> {}</td>
</tr>
<tr>
<td>Access to state</td>
<td>useState() kullanarak state'e erişilebilir</td></tr>
<tr><td>Lifecycle Hooks (Class componentte state'e erişebilir ve onu değiştirebilir)</td>
<td>No Lifecycle Hooks</td></tr>
<tr><td>Access state and Props via "this" this.props.XY or this.state.XY</td>
<td>In functional components you get props as an arguament and therefore you can just use it like props.XY</td></tr>
<tr>
<td>Use if you need to manage state or access to lifecycle hooks and you dont want to use React Hooks</td>
<td>Use it in all other case</td></tr>
</tbody>
<table></br>

### Component Lifecycles
<p>

- Only available in class base components
The naming can be confusing but lifecycle .hooks have absolutely nothing to do with  "React Hooks"
- When a component is created then first of all the constructor executes. Constructor içerisinde değişkenler initialize edilebilir. Ancak kesinlike sideEffect'e sebep olacak çağrılar yapılmamalıdır. SideEffect'e neden olan şeylerden birisi http istekleridir. Constructor'dan spnra getDerivedStateFrom method çalışır. bu method props değişkenini kontrol eder. Angular'daki ngOnchanges gibidir burada da sideEffect olusturacak seylerden kaçınmalısın. 3. aşamada render çalışır. Buradada http istek ya da timeout gibi sideEffect oluşturacak hareketler yapmamalısın.4. aşamada component didmount çalışır.
<b>ComponentDidMount:</b> is a very important lifecycle hook which you will use a lot when you are working with class based components because you create side effect. That is typical hook you would use for making http request to get new data from the web. What you shpuldnt do in here is update state. So dont call set state in here unless it's in. Let's say the then block of a promise after you sent an http request but dont call setsyate in here scynhronously. Çünkü render eder ve bu da performansu etkiler.
</p>

### Hooks
<b>Hook Nedir?</b> Hook, React özelliklerini “bağlamanıza” izin veren özel bir fonksiyondur. Örneğin useState, React state’ini fonksiyon bileşenlerine eklemenize izin veren bir Hook’tur.
<b> ## UseState: </b> That hook is just a function and it's going to allow us to use a piece of state inside this functional component. Bir başlangıç değeri almak ister.
<code>
import React, { useState } from 'react';
function Example() {
  // "count" adında yeni bir state değişkeni tanımlayın.
  const [count, setCount] = useState(0);}
  </code><br/>
  <b>useState‘i çağırmak ne işe yarar?</b> Bu, yeni bir “state değişkeni” tanımlar. Değişkenimizin adı count; fakat farklı bir şekilde de (örneğin banana) çağırabilirdik. Bu yöntemle fonksiyon çağrıları arasında verilerinizi koruyabilirsiniz.
  - useState ise this.state‘in sınıfta sağladığı özellikleri kullanmanın yeni bir yoludur. Normalde değişkenler fonksiyon bitiminde “kaybolur”; fakat state değişkenleri React tarafından korunur.

### UseEffect
<p>Fonksiyonel bileşenlerde kullanırız. You can add it anywhere in your functional component body and useEffect as sa default takes a function. Callback funtion'ı parametre olarak alır. Şöyle ki: useEffect(()=>{})

- UseEffect doğru şekilde kullanılmalıdır çünkü devamlı ayağa kalkar. It combines componentDidMount and componentDidUpdate
- Peki bu devamlı değişimi nasıl kontrol edebiliriz ? etkileneceği değeri set edebiliriz eğer boş parametre ([]) geçersek render'da sadece bir kez çalışır.</p>

### Memo
<p>Memo daha önce shouldComponentUpdate methodu ile yapabildiğimiz sürekli render işlemini engellemeyi daha kolay bir hale getirir. İstenmeyen re-render işlemlerinin önüne geçmek için kullanılır. shouldComponentdidUpdate eski sürümde kullanılır ve modern bir yaklaşım değildir. shouldcomponentUpdate çok güçlü bir özelliktir ancak yalnızca class based wbileşenlerde kullanılır. Yalnız unutma ki bunlar extra kontrollerdir ve performansı doğruan etkiler. Diyelim ki 50 tane propsun var 50si için if yazıp kontrol mu edeceksin bunun onune gecmek içinde pureComponent kalıtımını kullanabilirim</p>

### Context API (Ağaca veri yaymak)
<p>Context, prop'ları her seviyede manuel olarak geçmek zorunda kalmadan bileşen ağacı üzerinden veri iletmenin bir yolunu sunar.

- Normal bir React uygulamasında veri proplar aracılığıyla yukarıdan aşağıya taşınır.
- Context; mevcut kullanıcıyı doğrulama, tema veya dil seçimi gibi Reactbileşen ağacında global olarak düşünülebilecek verileri paylaşmak için kullanılır. Context kullanarak ara öğelerden prop'ları geçirmekten kaçınırız.
- Herbir bileşenin içinden açıkça geçmeden bileşen ağacının derinliklerine bir value geçmemizi sağlar.
- Context bileşeninin tekrar kullanılırlığını olumsuz yönde etkiler. Dolayısıyla ölçülü kullanılmalıdır.
- React context nesnesine abone bir bileşen oluşturduğunda context'in mevcut değerini ağaçtaki en yakın Provider'dan okur.
- Her Context nesnesi, tüketici bileşenlerin context güncellemelerine abone olmasını sağlayan bir React Provider bileşeni ile birlikte gelir.
- Provider bileşeni, bu Provider’ın soyundan gelen tüketici bileşenlerine geçirilecek olan bir value prop’unu kabul eder.
- Birçok tüketici bir Provider’a bağlanabilir.
- Provider’lar ağaçtaki daha derin değerleri değiştirmek için iç içe geçirilebilirler.
- Bir Provider’ın soyundan gelen tüm tüketiciler, Provider’ın value prop’u her değiştiğinde yeniden oluşturulur.
- Provider’ın soyundan gelen tüketicilere (.contextType ve useContext de dahil olmak üzere) yayılması,shouldComponentUpdate metoduna tabi değildir, dolayısıyla herhangi bir bileşen güncellemeyi önlediğinde bile tüketici güncellenir.
 ![App-ContextApi](https://github.com/NisanurBulut/MythologyOfReactJs/blob/master/Trailers/Trailer_ContextApiApp.gif)
 - Context data update edilecekse, contextapi içerisinde update,click,change... eventler yazılır bu eventler üzerinden state değişimi yapılır ve consume edilirkende alt bileşenler yine bu event'lara erişerek context data'yı güncellerler.
</p>

- Understanding the Base Features & Syntax
- Working with Lists and Conditionals
- Styling React Components & Elements (Eğer v2 de çalışılıyorsa proje ject edildiğinde css dosyaları file.module.css şeklinde kaydedilirse webpack.config.js dosyasında değişim yapmadan çalışılmaya devam edilebilir.)
- Diving Deeper into Components & React Internals
</p>

### Helpfull Websites
[tr.reactjs.org](https://tr.reactjs.org/docs/getting-started.html)
[styled-components](https://styled-components.com/)
[The Net Ninja React Context & Hooks Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI)