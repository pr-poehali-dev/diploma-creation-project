import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [animateCounters, setAnimateCounters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCounters(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: "Средний балл", value: 4.8, icon: "TrendingUp", color: "text-purple-600" },
    { label: "Проектов завершено", value: 12, icon: "CheckCircle2", color: "text-green-600" },
    { label: "Часов обучения", value: 240, icon: "Clock", color: "text-blue-600" },
    { label: "Достижений", value: 8, icon: "Award", color: "text-amber-600" },
  ];

  const achievements = [
    { title: "Лучший проект года", date: "2024", icon: "Trophy" },
    { title: "Отличник курса", date: "2023-2024", icon: "Star" },
    { title: "Командный игрок", date: "2024", icon: "Users" },
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "UI/UX Design", level: 82 },
    { name: "Аналитика", level: 90 },
  ];

  const Counter = ({ end, duration = 1000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animateCounters) return;
      
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [animateCounters, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <Card className="overflow-hidden animate-fade-in border-0 shadow-2xl">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="GraduationCap" size={40} className="text-purple-200" />
                  <h1 className="text-4xl font-bold">Диплом</h1>
                </div>
                <p className="text-purple-100 text-lg">О высшем образовании</p>
              </div>
              <Badge className="bg-white text-purple-700 text-base px-4 py-2 font-semibold">
                С отличием
              </Badge>
            </div>
          </div>

          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-800">Иванов Иван Иванович</h2>
              <p className="text-slate-600 text-lg">Бакалавр компьютерных наук</p>
              <div className="flex items-center gap-2 text-slate-500">
                <Icon name="Calendar" size={16} />
                <span>Выпуск 2024</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-slate-700 leading-relaxed">
                Успешно завершил программу обучения по направлению "Информационные технологии" 
                с демонстрацией выдающихся академических результатов и профессиональных компетенций.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full bg-slate-50 mb-3 ${stat.color}`}>
                  <Icon name={stat.icon} size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">
                  <Counter end={stat.value} />
                </div>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Award" size={24} className="text-purple-600" />
                <h3 className="text-xl font-bold text-slate-800">Достижения</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="p-2 rounded-full bg-white">
                      <Icon name={achievement.icon} size={20} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{achievement.title}</h4>
                      <p className="text-sm text-slate-500">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="BarChart3" size={24} className="text-purple-600" />
                <h3 className="text-xl font-bold text-slate-800">Компетенции</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-slate-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animateCounters ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="LineChart" size={24} className="text-purple-600" />
              <h3 className="text-xl font-bold text-slate-800">Динамика успеваемости</h3>
            </div>
            <div className="h-64 flex items-end gap-4 justify-around">
              {[65, 72, 78, 85, 88, 92, 95, 96].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg overflow-hidden">
                    <div
                      className="w-full bg-gradient-to-t from-purple-600 to-indigo-600 rounded-t-lg transition-all duration-1000 ease-out"
                      style={{
                        height: animateCounters ? `${value * 2.5}px` : '0px',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Сем {index + 1}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-slate-500 text-sm py-4">
          <p>Документ выдан 15 июня 2024 года</p>
          <p className="mt-1">Регистрационный номер: 2024/ВО-12345</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
