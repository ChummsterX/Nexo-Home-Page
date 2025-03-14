<template>
  <div class="sm:max-w-screen-sm mx-auto" id="faqAccordion">
    <div v-for="(item, index) in props.items" class="text-slate-400">
      <h2 :id="'faqAccordionHeading_' + index">
        <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-700 gap-3" :aria-expanded="item.active ? 'true' : 'false'" :aria-controls="'faqAccordionBody_' + index">
          <span>{{ item.title }}</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div :id="'faqAccordionBody_' + index" class="hidden" :aria-labelledby="'faqAccordionHeading_' + index">
        <div class="py-5 border-b border-gray-700">
          <p class="text-slate-400" v-html="item.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Accordion } from "flowbite";

import type { AccordionOptions, AccordionItem, AccordionInterface } from "flowbite";
import type { InstanceOptions } from 'flowbite';

interface FaqItem {
  title: string;
  content: string;
  active: boolean;
}

const props = defineProps<{ items: FaqItem[] }>();

const initAccordion = () => {
  const accordionEl = document.querySelector('#faqAccordion') as HTMLElement;

  const accordionItems: AccordionItem[] = props.items.map((item, index) => ({
    id: `faqAccordionHeading_${index}`,
    triggerEl: document.querySelector(`#faqAccordionHeading_${index}`) as HTMLElement,
    targetEl: document.querySelector(`#faqAccordionBody_${index}`) as HTMLElement,
    active: item.active
  }));

  const options: AccordionOptions = {
    alwaysOpen: false,
    activeClasses: 'bg-gray-800 text-white',
    inactiveClasses: 'text-slate-400',
    onOpen: (item) => {
      console.log('accordion item has been shown');
      console.log(item);
    },
    onClose: (item) => {
      console.log('accordion item has been hidden');
      console.log(item);
    },
    onToggle: (item) => {
      console.log('accordion item has been toggled');
      console.log(item);
    },
  };

  const instanceOptions: InstanceOptions = {
    id: 'faqAccordion',
    override: true
  };

  const accordion: AccordionInterface = new Accordion(accordionEl, accordionItems, options, instanceOptions);
};

onMounted(() => {
  useFlowbite(() => {
    initAccordion();
  });
});
</script>